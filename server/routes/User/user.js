const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userLearning = require("../../models/User/UserLearning")
const { body, validationResult } = require('express-validator');
// MIDDLEWARE
const fetchuser = require('../../middleware/fetchuser')
// USER MODEL
const User = require('../../models/User/User')

// CREATE ROUTER
const router = express.Router();

// JSON secret
const JWT_SECRET = process.env.JWT_SECRET || "wearebuildhacks";


//* API ROUTE 1 : USER SIGNUP
router.post('/signup', [
    body('name', "Enter a valid name").isLength({ min: 3 }),
    body('email', "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({ min: 5 }),
], async (req, res) => {
    // CHECK IF THE CREATOR EXISTS
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    const { name, email, password, speaks, learns } = req.body
    try {
        const user = await User.find({ email: email })
        let newuser = {}
        if (!user[0]) {

            const salt = await bcrypt.genSalt(10); const hashedPassword = await bcrypt.hash(password, salt); 
           
            newuser = await User.create({
                createdOn: Date.now(),
                name,
                speaks,
                learns,
                email,
                password: hashedPassword,
                status: 1
            })
        } else {
            return res.json({ success: false, error: "User already exists. Login Instead!" })
        }
        
        const data = {
            user: {
                id: newuser.id,
                status: newuser.status
            }
        }
        const jwtToken = jwt.sign(data, JWT_SECRET)
        success = true

        return res.json({
            success: true,
            token: jwtToken
        })
    } catch (error) {
        console.log(error)
        return res.send({ success: false, error: error.message })
    }

})


//* API ROUTE 2 : USER LOGIN
router.post('/login', [
    body('email', "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
], async (req, res) => {
    // CHECK IF THE CREATOR EXISTS
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    const { email, password } = req.body
    try {
        const user = await User.find({ email: email })
        if (!user[0]) {
            return res.json({ success: false, error: "Invalid Credentials" })
        }
        const passwordCompare = await bcrypt.compare(password, user[0].password)
        if (!passwordCompare) {
            return res.json({ success: false, error: "Invalid Credentials" })
        }
        const data = {
            user: {
                id: user[0].id,
                status: user[0].status
            }
        }
        const jwtToken = jwt.sign(data, JWT_SECRET)
        success = true

        return res.json({
            success: true,
            token: jwtToken
        })
    } catch (error) {
        console.log(error)
        return res.send({ success: false, error: error.message })
    }

})

//* API ROUTE 3: Update User
router.post("/updateUser", fetchuser, async(req, res) => {
    try {
        const { name, speaks, learns } = req.body;
        const updatedUser = await User.findByIdAndUpdate(req.user.id, {
            name,
            speaks,
            learns
        }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ success: false, error: "User not found" });
        }

        return res.json({ success: true, user: updatedUser });
    } catch (error) {
        return res.status(500).json({ success: false, error: "Some error occurred" });
    }
})



//* API ROUTE 4: Get User Details
router.get("/details",fetchuser,async(req,res)=>{
    try {
        const user = await User.findById(req.user.id).select({ name:1, email:1, speaks: 1, learns: 1 })
        
        if(!user){
            return res.json({success:false,res:[]})
        }
        
        const userLearningDetails = await userLearning.findOne({ userId: req.user.id })


        return res.json({success:true, message: "User Details feth successfull", user})
    } catch (error) {
        return res.json({success:false,error:"Some error Occured"}) 
    }
})

module.exports = router;

const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { body, validationResult } = require('express-validator');
// MIDDLEWARE
const fetchuser = require('../../middleware/fetchuser')
// USER MODEL
const User = require('../../models/User/User')

// CREATE ROUTER
const router = express.Router();

// JSON secret
const JWT_SECRET = process.env.JWT_SECRET;


// ROUTE 1 : Create/check a user after login at: /api/user/newUser
router.post('/newUser', async (req, res) => {
    // CHECK IF THE CREATOR EXISTS
    const { name, email , speaks, learns } = req.body
    try {
        const user = await User.find({ email: email })
        let newuser = {}
        if (!user[0]) {
            newuser = await User.create({
                createdOn: Date.now(),
                linkedinID,
                googleID,
                name,
                photo,
                email,
                location,
                status: 1
            })
        } else {
            newuser = await User.findByIdAndUpdate(user[0]._id.toString(), {
                linkedinID,
                googleID,
                name,
                photo,
                email,
                status: 1
            })
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
            jwtToken
        })
    } catch (error) {
        console.log(error)
        return res.send({ success: false, error: error.message })
    }

})



// ROUTE 3: Create order POST : /api/user/newOrder
router.post('/service/newOrder/:id',[
    body('status', "Please enter a valid status for the order").exists(),
    body('amount', "Enter an amount").exists()
], fetchuser, async (req, res) => {
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    try {
        const {razorpayPaymentId , razorpayOrderId , razorpaySignature } = req.body
        const old = await Uorder.find({ userID : req.user.id , serviceID: req.params.id})
        if(old[0]){
            return res.send({ success: true , already:true, res: old[0]})
        }
        const {  amount , status } = req.body;
        
        const order = await Uorder.create(
            {
                userID: req.user.id,
                serviceID : req.params.id,
                amount, 
                paymentData:{
                    paymentID : razorpayPaymentId,
                    orderID : razorpayOrderId,
                    signature : razorpaySignature
                },
                status,
            }
        )
        success = true;
        res.send({ success})
    } catch (error) {
        return res.status(500).send({ success, error: 'Some Error Occured' })
    }
})



// // GET advanced user Info which the creator can see
router.get('/info/advanced/:id' , async (req, res) => { //Creator Login Required
    let success = false;
    try {
        const user = await User.findById(req.params.id).select("-password")
        if (!user) {
           return res.send({ success , error: "User not found"})
        }

        success = true;
        return res.send({ success, res: user })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ success, error: 'Some Error Occured' })
    }
})


// // GET total number of users on the platform
router.get('/totalusercount' ,async (req, res) => { //Creator Login Required
    let success = false;
    try {
        const user = await User.find()
        if (!user) {
           return res.send({ success , count:0})
        }

        success = true;
        return res.send({ success, count:user.length })
    } catch (error) {
        return res.status(500).send({ success, error: 'Some Error Occured' })
    }
})


// get user details from jettoken

router.get("/getUserDetails",fetchuser,async(req,res)=>{
    try {
        const user = await User.findById(req.user.id).select({name:1,photo:1,email:1})
        if(!user){
            return res.json({success:false,res:[]})
        }
        
        return res.json({success:true,user})
    } catch (error) {
        return res.json({success:false,error:"Some error Occured"})
        
    }
})

module.exports = router;

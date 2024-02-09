const express = require('express');
const UserLearning = require('../../models/User/UserLearning');
const fetchuser = require('../../middleware/fetchuser');


const router = express.Router();


//* API ROUTE : CREATE USER CONVERSATION
router.post("/create")

//* API ROUTE : GET USER LEARNING PROFILE
router.get("/", fetchuser, async (req, res) => {
    try {
        const userLearning = await UserLearning.findOne({ user: req.user.id });
        if (!userLearning) {
            return res.json({ success: false, message: "No learning profile found" });
        }
        return res.json({ success: true, userLearning });
    } catch (error) {        
        console.log(error);
        return res.json({ success: false, error: "Some error occured" });
    }
})


//* API ROUTE 1 : USER LEARNING CREATE/UPDATE
router.post("/create", 
[
    body('language', "Enter a valid language").isLength({ min: 3 }),
], fetchuser, async (req, res) => {
    // error validation 
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    } 

    let success = false;
    try {
        const { language, duration, users } = req.body;
        
        // check if the user has already created a learning profile
        const isuserLearning = UserLearning.find({ user: req.user.id });

        if (!isuserLearning[0]) {
            const userLearning = new UserLearning({ language, duration, 
            points: parseInt(duration/30), // 1 point for every 30 minutes of learning
            user: req.user.id });


            await userLearning.save();
            return res.json({ success: true, message: "Learning started" })
        }else {
            const userLearning = await UserLearning.findOne({ user: req.user.id });
            userLearning.language = language;
            userLearning.duration = duration;
            userLearning.points+= parseInt(duration/30)
            await userLearning.save();

            return res.json({ success: true, message: "Learning updated" })
        }

        
    } catch (error) {
        console.log(error);
        return res.json({ success: false, error: "Some error occured" });
    }


})

module.exports = router;
const express = require('express');
const UserLearning = require('../../models/User/UserLearning');
const fetchuser = require('../../middleware/fetchuser');


const router = express.Router();


//* API ROUTE : CREATE USER CONVERSATION
router.post("/create", fetchuser, async( req, res ) => {
    try {
        const { language, duration, users } = req.body;
        const userLearning = new UserLearning({ language, duration, points: parseInt(duration/30), user: req.user.id });
        await userLearning.save();
        
        return res.json({ success: true, message: "Learning started" });
    } catch (error) {
        console.log(error);
        return res.json({ success: false, error: "Some error occured" });
    }
})
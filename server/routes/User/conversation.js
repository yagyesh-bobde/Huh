const express = require('express');
const UserLearning = require('../../models/User/UserLearning');
const ConversationSchema = require('../../models/Conversations');
const fetchuser = require('../../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const AnalysisSchema = require('../../models/Analysis');

const router = express.Router();


//* API ROUTE : CREATE USER CONVERSATION
router.post("/create", 
[
    body('language', "Enter a valid language").isLength({ min: 3 }),
    body('duration', "Enter a valid duration").isNumeric(),
    body('users', "Enter valid users").isArray(),
    body('analysisText', "Enter valid analysis text").isString(),
    body('isAI', "Enter valid isAI").isBoolean(),
],
async( req, res ) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ success: false, errors: errors.array() });
    }
    try {
        let { language, duration, users, analysisText, isAI } = req.body;
        let userLearning = new ConversationSchema({ 
            createdOn: Date.now(),
            language, duration, users });

        // create analysis
        let analysis = new AnalysisSchema({ convID: userLearning._id, duration, text: analysisText || "" });

        await analysis.save();

        userLearning.analysisID = analysis._id;

        await userLearning.save();
        

        //* add conversation to user learning and increase points
        if(users[1]){
            let user1 = await ConversationSchema.findOne({ users: users[0] });
            if(user1.conversations){
                user1.conversations = [...user1.conversations, userLearning._id];
            } else {
                user1.conversations = [...users];
            }

            user1.points += parseInt(duration/30);
            await user1.save();

        }


        if(!isAI){
            let user2 = await ConversationSchema.findOne({ users: users[1] });

            if(user2.conversations){
                user2.conversations = [...user2.conversations, userLearning._id];
            } else {
                user2.conversations = [...users];
            }

            user2.points += parseInt(duration/30);
            await user2.save({ serverSelectionTimeoutMS : 2000});
    
        }





        return res.json({ success: true, message: "Learning started" });
    } catch (error) {
        console.log(error);
        return res.json({ success: false, error: "Some error occured" });
    }
})




module.exports = router;
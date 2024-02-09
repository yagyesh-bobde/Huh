const express = require('express');
const UserLearning = require('../../models/User/UserLearning');
const fetchuser = require('../../middleware/fetchuser');


const router = express.Router();


router.post("", fetchuser, (req, res) => {
    
})
const mongoose = require('mongoose');

const UserLearning = new mongoose.Schema({
    createdOn: { type: Date, default:Date.now },
    userID: { type: mongoose.Schema.Types.ObjectId, ref:"All Users" },
    language: { type: mongoose.Schema.Types.String },
    conversations: { type: mongoose.Schema.Types.Number },
    points: { type: mongoose.Schema.Types.Number },
    level: { type: mongoose.Schema.Types.Number },
    rating : { type: Number , required : true},
    status: { type: Number }
})


module.exports = mongoose.model("User Learning", UserLearning)
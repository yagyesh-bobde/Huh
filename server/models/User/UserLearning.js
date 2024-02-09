const mongoose = require('mongoose');

const UserLearning = new mongoose.Schema({
    createdOn: { type: Date, default:Date.now },
    userID: { type: mongoose.Schema.Types.ObjectId, ref:"All Users" },
    conversations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Conversation" }],
    points: { type: mongoose.Schema.Types.Number },
    // level: { type: mongoose.Schema.Types.Number },
    rating : { type: Number , required : true, default: 3},
    status: { type: Number }
})


module.exports = mongoose.model("User Learning", UserLearning)
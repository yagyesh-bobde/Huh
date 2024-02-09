const { Schema, model } = require("mongoose")

const ConversationSchema = new Schema({
    createdOn: { type: Date, required: true },
    users: { type: Array, required: true },
    conversation: { type: String, required: true },
})



module.exports = model("Conversations", ConversationSchema)
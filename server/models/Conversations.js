const { Schema, model } = require("mongoose")

const ConversationSchema = new Schema({
    createdOn: { type: Date, required: true },
    users: [{ type: Schema.Types.ObjectId, ref: 'All Users', required: true }],
    analysisID: { type: Schema.Types.ObjectId, ref: "Analysis"},
    language: { type: String , required: true }, 
    duration: { type: Number }, // seconds

})



module.exports = model("Conversation", ConversationSchema)
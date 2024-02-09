const { Schema, model } = require("mongoose")

const AnalysisSchema = new Schema({
    createdOn: { type: Date, required: true, default: Date.now() },
    convID: [{ type: Schema.Types.ObjectId, ref: 'Conversation', required: true }],
    text: { type: String, },
    duration: { type: Number }, // seconds
})



module.exports = model("Analysis", AnalysisSchema)
const { Schema, model } = require("mongoose")

const AnalysisSchema = new Schema({
    createdOn: { type: Date, default: Date.now },
    convID: [{ type: Schema.Types.ObjectId, ref: 'Conversation', required: true }],
    text: { type: String }// seconds
})



module.exports = model("Analysis", AnalysisSchema)
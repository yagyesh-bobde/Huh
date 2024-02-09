const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    createdOn : {type:Date , required: true},
    name: { type: String, required: true},
    email: {type: String, required: true},
    password: {type: String},
    about: { type: String } ,
    speaks: [], //* array of languages that user speaks
    learns: [], //* array of languages that usre wants to learn
    status: { type: Number }
})

module.exports = mongoose.model("All Users", UserSchema)
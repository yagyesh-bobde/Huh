const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    createdOn : {type:Date , required: true},
    name: { type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    about: { type: String } ,
    speaks: { type: Array, required: true}, //* array of languages that user speaks
    learns: { type: Array, required: true} , //* array of languages that usre wants to learn
    status: { type: Number } //* 1- Visible ; 0- Hidden
})

module.exports = mongoose.model("All Users", UserSchema)



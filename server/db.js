const mongoose = require("mongoose")
require('dotenv').config()

const mongouri = process.env.DB_URI || "mongodb+srv://yagyesh:yagyesh@developers-zone.69fu5rm.mongodb.net" 

const connectToMongo = () =>{
    mongoose.connect(mongouri,()=>{
        console.log("Connected to Mongo Successfully")
    })
}


module.exports = connectToMongo;
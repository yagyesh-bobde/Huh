const mongoose = require("mongoose")
require('dotenv').config()

const mongouri = process.env.DB_URI || "mongodb+srv://yagyesh:yagyesh@developers-zone.69fu5rm.mongodb.net" 

const connectToMongo = async() =>{
    try {
        mongoose.set("strictQuery", false)
        mongoose.connect(mongouri)
    } catch (error) {
        console.log(error)
        process.exit()
    }
}


module.exports = connectToMongo;
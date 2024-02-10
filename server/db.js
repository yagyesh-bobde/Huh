const mongoose = require("mongoose")
require('dotenv').config()

const mongouri = process.env.DB_URI || "mongodb+srv://tusharpamnani55:LFdQb5BykFRPkMQW@cluster0.dcznhcf.mongodb.net" 

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
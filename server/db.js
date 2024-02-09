const mongoose = require("mongoose")
require('dotenv').config()

const mongouri = process.env.DB_URI || "mongodb+srv://YagyeshBobde:yagyeshbobde%402002@cluster0.nuuez0u.mongodb.net/anchor?retryWrites=true&w=majority" 

const connectToMongo = () =>{
    mongoose.connect(mongouri,()=>{
        console.log("Connected to Mongo Successfully")
    })
}


module.exports = connectToMongo;
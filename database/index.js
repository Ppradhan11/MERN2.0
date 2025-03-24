const mongoose = require('mongoose')
const ConnectionString = "mongodb+srv://praful:prafuldb@cluster0.ajdey.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
async function connectToDatabase(){
    await mongoose.connect(ConnectionString)
    console.log("Connected to DB Successfully")
 }
 
connectToDatabase()
module.exports = connectToDatabase
const mongoose = require("mongoose")

async function connectToMongo() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch(error){
        console.log("Error connection to mongo atlas")
    }
}

module.exports = connectToMongo
const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectToMongo = require('./mongooseConnect');

// const { Resend } = require('resend');
// const resend = new Resend(process.env.RESEND_KEY);

// for firebase-function upload only 
// const functions = require('firebase-functions');

const app = express()
app.use(express.json())
app.use(cors())


app.get("/testing-sample", async (req, res) => {
   connectToMongo()

    try{
        console.log("app getting get hit")
    }catch(error){
        console.log(error)
    }
    res.json("connecting to api working perfect")
})

// edit product 
app.post("/formdata/:section", async (req, res) => {

    try {
        const section = req.params.section
        const data = req.body;

        data["submitDate"] = new Date().toDateString()
        
        res.status(200).json("received")

        }catch(error){
            console.log(error)
        }

        res.json(data)

    

})


// this part for node.js 
//delete this for firebase
// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//     console.log("server is runnign on port", port)
// })

// this part is for firebase
exports.app = functions.https.onRequest(app)
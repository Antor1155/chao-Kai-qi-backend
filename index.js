const XLSX = require("xlsx")

const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectToMongo = require('./mongooseConnect');

const Products = require("./SchemaDesign/products.js")
// const { Resend } = require('resend');
// const resend = new Resend(process.env.RESEND_KEY);

// for firebase-function upload only 
// const functions = require('firebase-functions');

const app = express()
app.use(express.json())
app.use(cors())


app.get("/", async (req, res) => {
    try {
        connectToMongo()
        const products = await Products.find()

        res.json(products)


    } catch (error) {
        console.log(error)
        res.status(500).json("ERROR in getting the product for DB")
    }
})

app.get("/generateProducts", async (req, res) => {
    
    try {
        connectToMongo()

        // read xl sheet and product database 
        const workbook = XLSX.readFile('./ChaoKaiQiProducts.xlsx');
        const sheetName = 'Snap rotate style'; // Specify the desired sheet name
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet)

        const productsArray = []

        jsonData.forEach(productData =>{
            const product = {
                productName: productData["Model"],
                coverName: productData["Cover Name"],
                brand:productData["Compnay"],
                description: "",
                minimOrderQuantity: 10,
                pricePerUnit: productData["Unit Price USD"],
                productSize: productData["Product Size"],
                productGrossWeight: productData["Product weight/g"],
                imageArray: productData["Image Array"].split(","),

                mainImage: productData["Main Image url"],

                colors: {
                    black: {
                        name: "Black",
                        colorValue: "#393A3D",
                        imgLink: "/ProductImages/snapRotationStyle/colors/black"
                    },
                    whiteIce: {
                        name: "White Ice",
                        colorValue: "#CCEAF9",
                        imgLink: "/ProductImages/snapRotationStyle/colors/whiteIce"
                    },
                    deepGreen: {
                        name: "Deep Green",
                        colorValue: "#215142",
                        imgLink: "/ProductImages/snapRotationStyle/colors/deepGreen"
                    },
                    babyPink: {
                        name: "Baby Pink",
                        colorValue: "#E1CDCE",
                        imgLink: "/ProductImages/snapRotationStyle/colors/babyPink"
                    },
                    gray: {
                        name: "Gray",
                        colorValue: "#E5E3E6",
                        imgLink: "/ProductImages/snapRotationStyle/colors/gray"
                    },
                    lavenderPurple: {
                        name: "Lavender Purple",
                        colorValue: "#6A6C9A",
                        imgLink: "/ProductImages/snapRotationStyle/colors/lavanderPurple"
                    },

                },
            }

            productsArray.push(product)

            const newProductData = new Products(product)
            newProductData.save()
                .then(()=>console.log("saved data: " + productsArray.length))
                .catch(error => console.log(error))
        })

        res.send(productsArray)

    } catch (error) {
        console.log(error)
    }
    
})

// edit product 
app.post("/formdata/:section", async (req, res) => {

    try {
        const section = req.params.section
        const data = req.body;

        data["submitDate"] = new Date().toDateString()

        res.status(200).json("received")

    } catch (error) {
        console.log(error)
    }

    res.json(data)



})


// this part for node.js 
//delete this for firebase
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("server is runnign on port", port)
})

// this part is for firebase
// exports.app = functions.https.onRequest(app)
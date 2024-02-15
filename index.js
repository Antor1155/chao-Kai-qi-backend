const XLSX = require("xlsx")

const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectToMongo = require('./mongooseConnect');

const Products = require("./SchemaDesign/products.js")
const Brands = require("./SchemaDesign/Brands.js")
const Customer = require("./SchemaDesign/Customers.js")
// const { Resend } = require('resend');
// const resend = new Resend(process.env.RESEND_KEY);

// for firebase-function upload only 
// const functions = require('firebase-functions');

const app = express()
app.use(express.json())
app.use(cors())

// getting products from start index to start + end index 
app.get("/all-products/:start/:end", async (req, res) => {
    const start = req.params?.start ?? 0
    const end = req.params?.end ?? 36

    try {
        connectToMongo()
        const products = await Products.find().skip(start).limit(end)

        res.json(products)


    } catch (error) {
        console.log(error)
        res.status(500).json("ERROR in getting the product for DB")
    }
})

// getting x amount random products 
app.get("/random-products/:amount", async (req, res) => {
    try {
        const amount = parseInt(req.params?.amount)
        connectToMongo()
        const randomProducts = await Products.aggregate([{ $sample: { size: amount } }])
        res.json(randomProducts)
    } catch (error) {
        console.log(error)
        res.status(500).send("server error while getting the product")
    }
})

// getting exact produt with object id 
app.get("/product/:id", async (req, res) => {
    try {
        const id = req.params?.id
        connectToMongo()

        const product = await Products.findById(id)

        res.json(product)
    } catch (error) {
        console.log(error)
        res.status(500).send("server error while getting the product")
    }
})

// getting all brands and its model 
app.get("/brands", async (req, res) => {
    try {
        connectToMongo()
        const brands = await Brands.find()
        res.json(brands)
    } catch (error) {
        console.log(error)
        res.status(500).send("server error while getting the product")
    }
})


// generating products form xl sheet 
app.get("/generateProducts", async (req, res) => {

    try {
        connectToMongo()

        // read xl sheet and product database 
        const workbook = XLSX.readFile('./ChaoKaiQiProducts.xlsx');
        // const sheetName = 'Snap rotate style'; // Specify the desired sheet name
        // const sheetName = 'Snap Closure Full Package'; // Specify the desired sheet name
        // const sheetName = 'Acrylic 360-Degree Rotating P'; // Specify the desired sheet name
        // const sheetName = 'Acrylic Two-in-One magnetic'; // Specify the desired sheet name
        // const sheetName = 'AcrylicTwo-in-OneIntegratedS'; // Specify the desired sheet name
        // const sheetName = 'Acrylic Two-in-One Y Fold Side'; // Specify the desired sheet name
        const sheetName = 'Skin-like Back Sticker Solid Co'; // Specify the desired sheet name
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet)

        const productsArray = []

        jsonData.forEach(productData => {
            const col = {
                black: "",
                deepGreen: "",
                babyPink: "",
                lavenderPurple: "",
                // whiteIce: "",
                // gray: "",
                navyBlue: "",
                matchaGreen: "",
                lightPurple: "",
                red: "",

            }

            switch (productData["Compnay"]) {

                default:
                    col.black = "/ProductImages/Skin-like Back Sticker Solid Co/colors/apple (2)"
                    col.babyPink = "/ProductImages/Skin-like Back Sticker Solid Co/colors/apple (7)"
                    col.deepGreen = "/ProductImages/Skin-like Back Sticker Solid Co/colors/apple (5)"
                    col.lavenderPurple = "/ProductImages/Skin-like Back Sticker Solid Co/colors/apple (4)"
                    col.navyBlue = "/ProductImages/Skin-like Back Sticker Solid Co/colors/apple (6)"
                    col.red = "/ProductImages/Skin-like Back Sticker Solid Co/colors/apple (8)"
                    col.matchaGreen = "/ProductImages/Skin-like Back Sticker Solid Co/colors/apple (3)"
                    col.lightPurple = "/ProductImages/Skin-like Back Sticker Solid Co/colors/apple (1)"
                    break;

            }

            const product = {
                productName: productData["Model"],
                coverName: productData["Cover Name"],
                brand: productData["Compnay"],
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
                        imgLink: col.black
                    },
                    deepGreen: {
                        name: "Deep Green",
                        colorValue: "#215142",
                        imgLink: col.deepGreen
                    },
                    babyPink: {
                        name: "Baby Pink",
                        colorValue: "#E1CDCE",
                        imgLink: col.babyPink
                    },
                    lavenderPurple: {
                        name: "Lavender Purple",
                        colorValue: "#6A6C9A",
                        imgLink: col.lavenderPurple,
                    },
                    navyBlue: {
                        name: "Navy Blue",
                        colorValue: "#182F45",
                        imgLink: col.navyBlue,
                    },
                    red: {
                        name: "Red",
                        colorValue: "#D92727",
                        imgLink: col.red,
                    },
                    matchaGreen: {
                        name: "Matcha Green",
                        colorValue: "#8FF2B7",
                        imgLink: col.matchaGreen,
                    },
                    lightPurple: {
                        name: "Light Purple",
                        colorValue: "#D084FF",
                        imgLink: col.lightPurple,
                    },

                },
            }

            productsArray.push(product)

            // adding brand and unique products to it 
            Brands.findOneAndUpdate({ _id: product.brand },
                { $addToSet: { products: product.productName } },
                { upsert: true, new: true }
            ).then(() => {
                console.log("brand added")
            }).catch(error => {
                console.log(error)
            })

            // adding products to db 
            const newProductData = new Products(product)
            newProductData.save()
                .then((datax) => console.log("saved data: " + datax.length))
                .catch(error => console.log(error))
        })

        res.send(productsArray)

    } catch (error) {
        console.log(error)
    }
})


// Define a route to delete documents
app.delete('/delete', async (req, res) => {
    try {
        connectToMongo()

        await Products.deleteMany({ coverName: "Acrylic (2.0A Board) Two-in-One Magnetic Detachable" });
        res.send('Documents deleted successfully.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting documents.');
    }
});

// get searched products 
app.get("/search", async (req, res) => {
    try {
        const searchTerm = req.query.q

        const regex = new RegExp(searchTerm, "i")

        connectToMongo()

        const result = await Products.find({
            $or: [
                { productName: { $regex: regex } },
                { brand: { $regex: regex } },
                { coverName: { $regex: regex } },
            ]
        }).limit(36)

        res.send(result)
    } catch (error) {
        console.log(error)
        res.status(500).send("server error in search product api")
    }
})



// get selected model products only 
app.post("/selected-products", async (req, res) => {
    try {
        const data = req.body.updatedSelection
        const products = await Products.find({ productName: { $in: data } }).limit(36)

        res.json(products)

    } catch (error) {
        console.log(error)
        res.status(500).send("problem in server finding the data")
    }
})


app.post("/mail-and-orders/:option", async (req, res) => {
    const option = req.params.option
    const { customerData } = req.body
    try {
        connectToMongo()
        const newCustomer = new Customer(customerData)
        newCustomer.save()

        if (option === "mail") {

            console.log(customerData)

        } else if (option === "order") {
            const { customerData, order } = data
            console.log("order and customerData")
        }



        res.send("collected successfully")
    } catch (error) {
        console.log(error)
        res.status(500).send("couldn't process the data")
    }
})




// this part for node.js 
//delete this for firebase
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("server is runnign on port", port)
})

// this part is for firebase
// exports.app = functions.https.onRequest(app)
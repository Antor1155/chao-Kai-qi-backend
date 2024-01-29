const schemaData = {
    productName: "ipad mini 6",
    coverName: "Snap Rotate style",
    brand:"Apple",
    description: "",
    minimOrderQuantity: 10,
    pricePerUnit: 2.6,
    productSize: "200 * 150 * 13",
    productGrossWeight: "198",
    imageArray: ["/ProductImages/example-type/IPAD1.jpg", "/ProductImages/example-type/IPAD2.jpg", "/ProductImages/example-type/IPAD3.jpg", "/ProductImages/example-type/IPAD1.jpg","/ProductImages/example-type/IPAD2.jpg", "/ProductImages/example-type/IPAD3.jpg"],

    mainImage: "/ProductImages/example-type/IPAD1.jpg",
    colors: {
        roseGold: {
            name: "rose gold",
            colorValue: "#B78E89",
            imgLink: "/ProductImages/example-type/IPAD1.jpg"
        },
        navy: {
            name: "navy",
            colorValue: "#3B3B5F",
            imgLink: "/ProductImages/example-type/IPAD2.jpg"
        },
        black: {
            name: "black",
            colorValue: "#303030",
            imgLink: "/ProductImages/example-type/IPAD3.jpg"
        }
    },

}


const snapRotationStyle = {
    productName: productData["Model"],
    coverName: productData["Cover Name"],
    brand:productData["Compnay"],
    description: "",
    minimOrderQuantity: 10,
    pricePerUnit: productData["Unit Price USD"],
    productSize: productData["Product Size"],
    productGrossWeight: productData["Product weight/g"],
    imageArray: productData["Image Array"],

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

const snapClosureFullPackage = {
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
            imgLink: "/ProductImages/snapClosureFullPackage/colors/black"
        },
        whiteIce: {
            name: "White Ice",
            colorValue: "#CCEAF9",
            imgLink: "/ProductImages/snapClosureFullPackage/colors/whiteIce"
        },
        deepGreen: {
            name: "Deep Green",
            colorValue: "#215142",
            imgLink: "/ProductImages/snapClosureFullPackage/colors/deepGreen"
        },
        babyPink: {
            name: "Baby Pink",
            colorValue: "#E1CDCE",
            imgLink: "/ProductImages/snapClosureFullPackage/colors/babyPink"
        },
        gray: {
            name: "Gray",
            colorValue: "#E5E3E6",
            imgLink: "/ProductImages/snapClosureFullPackage/colors/gray"
        },
        lavenderPurple: {
            name: "Lavender Purple",
            colorValue: "#6A6C9A",
            imgLink: "/ProductImages/snapClosureFullPackage/colors/lavanderPurple"
        },

    },
}

const Acrylic360DegreeRotatingP =         jsonData.forEach(productData => {
    const col = {
        black: "",
        whiteIce: "",
        deepGreen: "",
        babyPink: "",
        gray: "",
        lavenderPurple: ""

    }

    switch (productData["Compnay"]) {
        case "Apple":
            col.black = "/ProductImages/Acrylic361DegreeRotatingP/colors/apple black"
            col.whiteIce = "/ProductImages/Acrylic365DegreeRotatingP/colors/apple whiteIce"
            col.babyPink = "/ProductImages/Acrylic360DegreeRotatingP/colors/apple babyPink"
            col.deepGreen = "/ProductImages/Acrylic362DegreeRotatingP/colors/apple deepGreen"
            col.gray = "/ProductImages/Acrylic363DegreeRotatingP/colors/apple gray"
            col.lavenderPurple = "/ProductImages/Acrylic364DegreeRotatingP/colors/apple lavanderPurple"
            break;

        case "HONOR":
        case "Huawei":
            col.black = "/ProductImages/Acrylic360DegreeRotatingP/colors/huawei (4)"
            col.whiteIce = "/ProductImages/Acrylic360DegreeRotatingP/colors/huawei (6)"
            col.babyPink = "/ProductImages/Acrylic360DegreeRotatingP/colors/huawei (3)"
            col.deepGreen = "/ProductImages/Acrylic360DegreeRotatingP/colors/huawei (5)"
            col.gray = "/ProductImages/Acrylic360DegreeRotatingP/colors/huawei (2)"
            col.lavenderPurple = "/ProductImages/Acrylic360DegreeRotatingP/colors/huawei (1)"
            break;


        case "Lenovo":
        case "Nokia":
        case "OPPO":
            col.black = "/ProductImages/Acrylic360DegreeRotatingP/colors/oppo (2)"
            col.whiteIce = "/ProductImages/Acrylic360DegreeRotatingP/colors/oppo (4)"
            col.babyPink = "/ProductImages/Acrylic360DegreeRotatingP/colors/oppo (6)"
            col.deepGreen = "/ProductImages/Acrylic360DegreeRotatingP/colors/oppo (5)"
            col.gray = "/ProductImages/Acrylic360DegreeRotatingP/colors/oppo (1)"
            col.lavenderPurple = "/ProductImages/Acrylic360DegreeRotatingP/colors/oppo (3)"
            break


        case "Samsung":
        case "Vivo":
            col.black = "/ProductImages/Acrylic360DegreeRotatingP/colors/samsung (3)"
            col.whiteIce = "/ProductImages/Acrylic360DegreeRotatingP/colors/samsung (2)"
            col.babyPink = "/ProductImages/Acrylic360DegreeRotatingP/colors/samsung (5)"
            col.deepGreen = "/ProductImages/Acrylic360DegreeRotatingP/colors/samsung (4)"
            col.gray = "/ProductImages/Acrylic360DegreeRotatingP/colors/samsung (6)"
            col.lavenderPurple = "/ProductImages/Acrylic360DegreeRotatingP/colors/samsung (1)"
            break

        case "Xiaomi":
            col.black = "/ProductImages/Acrylic360DegreeRotatingP/colors/xiaomi (6)"
            col.whiteIce = "/ProductImages/Acrylic360DegreeRotatingP/colors/xiaomi (3)"
            col.babyPink = "/ProductImages/Acrylic360DegreeRotatingP/colors/xiaomi (1)"
            col.deepGreen = "/ProductImages/Acrylic360DegreeRotatingP/colors/xiaomi (2)"
            col.gray = "/ProductImages/Acrylic360DegreeRotatingP/colors/xiaomi (5)"
            col.lavenderPurple = "/ProductImages/Acrylic360DegreeRotatingP/colors/xiaomi (4)"
            break


        default:
            col.black = "/ProductImages/Acrylic361DegreeRotatingP/colors/apple black"
            col.whiteIce = "/ProductImages/Acrylic365DegreeRotatingP/colors/apple whiteIce"
            col.babyPink = "/ProductImages/Acrylic360DegreeRotatingP/colors/apple babyPink"
            col.deepGreen = "/ProductImages/Acrylic362DegreeRotatingP/colors/apple deepGreen"
            col.gray = "/ProductImages/Acrylic363DegreeRotatingP/colors/apple gray"
            col.lavenderPurple = "/ProductImages/Acrylic364DegreeRotatingP/colors/apple lavanderPurple"
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
            whiteIce: {
                name: "White Ice",
                colorValue: "#CCEAF9",
                imgLink: col.whiteIce
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
            gray: {
                name: "Gray",
                colorValue: "#E5E3E6",
                imgLink: col.gray
            },
            lavenderPurple: {
                name: "Lavender Purple",
                colorValue: "#6A6C9A",
                imgLink: col.lavenderPurple,
            },

        },
    }

    productsArray.push(product)

    // adding brand and unique products to it 
    // Brands.findOneAndUpdate({ _id: product.brand },
    //     { $addToSet: { products: product.productName } },
    //     { upsert: true, new: true }
    // ).then(() => {
    //     console.log("brand added")
    // }).catch(error => {
    //     console.log(error)
    // })

    // adding products to db 
    // const newProductData = new Products(product)
    // newProductData.save()
    //     .then(() => console.log("saved data: " + productsArray.length))
    //     .catch(error => console.log(error))
})

const AcrylicTwoinOneMagnetic = jsonData.forEach(productData => {
    const col = {
        black: "",
        whiteIce: "",
        deepGreen: "",
        babyPink: "",
        gray: "",
        lavenderPurple: ""

    }

    switch (productData["Compnay"]) {
        case "Samsung":
            col.black = "/ProductImages/AcrylicTwo-in-OneMagnetic/colors/samsung (1)"
            col.whiteIce = "/ProductImages/AcrylicTwo-in-OneMagnetic/colors/samsung (5)"
            col.babyPink = "/ProductImages/AcrylicTwo-in-OneMagnetic/colors/samsung (6)"
            col.deepGreen = "/ProductImages/AcrylicTwo-in-OneMagnetic/colors/samsung (2)"
            col.gray = "/ProductImages/AcrylicTwo-in-OneMagnetic/colors/samsung (3)"
            col.lavenderPurple = "/ProductImages/AcrylicTwo-in-OneMagnetic/colors/samsung (4)"
            break;

        default:
            col.black = "/ProductImages/AcrylicTwo-in-OneMagnetic/colors/apple (1)"
            col.whiteIce = "/ProductImages/AcrylicTwo-in-OneMagnetic/colors/apple (2)"
            col.babyPink = "/ProductImages/AcrylicTwo-in-OneMagnetic/colors/apple (3)"
            col.deepGreen = "/ProductImages/AcrylicTwo-in-OneMagnetic/colors/apple (5)"
            col.gray = "/ProductImages/AcrylicTwo-in-OneMagnetic/colors/samsung (3)"
            col.lavenderPurple = "/ProductImages/AcrylicTwo-in-OneMagnetic/colors/apple (1)"
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
            whiteIce: {
                name: "White Ice",
                colorValue: "#CCEAF9",
                imgLink: col.whiteIce
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
            gray: {
                name: "Gray",
                colorValue: "#E5E3E6",
                imgLink: col.gray
            },
            lavenderPurple: {
                name: "Lavender Purple",
                colorValue: "#6A6C9A",
                imgLink: col.lavenderPurple,
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
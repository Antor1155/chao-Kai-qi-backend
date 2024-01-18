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
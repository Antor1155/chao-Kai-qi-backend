const { Schema, model, models } = require("mongoose");

const ProductSchema = new Schema({
    name: String, 
    email: String, 

}, {timestamps: true})

const Products = models?.Order || model("Products", ProductSchema)

module.exports = Products
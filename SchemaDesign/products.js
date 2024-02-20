const { Schema, model, models } = require("mongoose");

const ProductSchema = new Schema({
    productName: {
      type: String,
      trim: true,
    },
    coverName: {
      type: String,
      trim: true
    },
    brand:{
        type: String,
        trim: true
    },
    description: {
      type: String,
      trim: true
    },
    minimOrderQuantity: {
      type: Number,
      min: 1 // Enforce minimum order quantity if provided
    },
    pricePerUnit: {
      type: Number,
      min: 0 // Enforce non-negative price if provided
    },
    productSize: {
      type: String,
      trim: true
    },
    productGrossWeight: {
      type: String,
      trim: true
    },
    imageArray: [String],
    mainImage: {
      type: String,
      trim: true
    },
    colors: {
      type: Object
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  });

const Products = models?.Products || model("Products", ProductSchema)

module.exports = Products
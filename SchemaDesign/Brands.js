const { Schema, model, models } = require("mongoose");

const BrandSchema = new Schema({
    _id: String, // Use string IDs to match brand names
    products: {
        type: [String],
        unique: true
    }
});

const Brands = models?.Brands || model("Brands", BrandSchema)

module.exports = Brands
const { Schema, model, models } = require("mongoose");

const CustomerSchema = new Schema({
    name:{type: String},
    country:{type: String},
    organization:{type: String},
    email:{type: String},
    phone:{type: String},
    note:{type: String},
});

const Customer = models?.Customer || model("Customers", CustomerSchema)

module.exports = Customer
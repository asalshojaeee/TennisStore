


const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    productName: String,
    price: Number,
    brandName: String,
    sellingPrice: Number,
    category: String,
    description: String,
    productImage: []
}, {
    timestamps: true
})



const productModel = mongoose.model("products", productSchema)
module.exports = productModel


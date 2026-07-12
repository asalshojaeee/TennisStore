


const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    roductName: String,
    price: Number,
    brandName: String,
    sellingPrice: Number,
    category: String,
    description: String,
    productImage: []
}, {
    timestamps: true
})



const productModel = mongoose.model("product", productSchema)
module.exports = productModel




const mongoose = require('mongoose');



const cartSchema = new mongoose.Schema({
    userId: String,
    productId: String,
    productName: String,
    productImage: [],
    quantity: Number,
    size: String,
    sellingPrice: String
}, {
    timestamps: true
})



const cartModel = mongoose.model("cart", cartSchema)


module.exports = cartModel


const mongoose = require('mongoose');



const cartSchema = new mongoose.Schema({
    userId: String,
    productId: String,
    quantity: Number,
    size: String
}, {
    timestamps: true
})



const cartModel = mongoose.model("cart", cartSchema)


module.exports = cartModel
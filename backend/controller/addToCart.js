
const cartModel = require('../models/cartModel')

const addToCart = async (req, res) => {
    try {

        const cart = await cartModel(req.body)

        const save = await cart.save()



        res.status(201).json({
            success: true,
            error: false,
            data: save,
            message: "Product added to cart successfully"

        })




    }


    catch (err) {
        res.json({
            error: true,
            success: false,
            message: err.message

        })
    }
}



module.exports = addToCart
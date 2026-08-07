

const cartModel = require('../models/cartModel')


const cart = async (req, res) => {
    try {
        const result = await cartModel.find({})
        res.status(201).json({
            error: false,
            success: true,
            data: result
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


module.exports = cart
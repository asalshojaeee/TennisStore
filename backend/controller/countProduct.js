
const cartModel = require('../models/cartModel')



const countProduct = async (req, res) => {

    try {

        const data = await cartModel.countDocuments()
        res.json({
            error: false,
            success: true,
            data: data
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

module.exports = countProduct
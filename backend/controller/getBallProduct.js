

const productModel = require('../models/productModel')



const getBallProduct = async (req, res) => {
    try {

        const result = await productModel.find({ category: 'ball' })
        res.status(200).json({
            success: true,
            error: false,
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

module.exports = getBallProduct
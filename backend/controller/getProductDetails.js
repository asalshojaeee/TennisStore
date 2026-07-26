
const productModel = require('../models/productModel')


const getProductDetails = async (req, res) => {



    try {


        const { productId } = req.body



        const product = await productModel.findById(productId)
        res.json({
            data: product,
            messgae: "ok",
            success: true,
            error: false
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



module.exports = getProductDetails
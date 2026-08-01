

const productModel = require('../models/productModel')

const recommandedProduct = async (req, res) => {


    try {


        const {brand, id } = req.query
        const products = await productModel.find({
            _id: { $ne: id },
            brandName: brand
        }).limit(4);

        res.json({
            success: true,
            data: products
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


module.exports = recommandedProduct
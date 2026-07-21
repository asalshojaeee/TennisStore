
const productModel = require('../models/productModel')

const getWomenClothes = async (req, res) => {

    try {


        const data = await productModel.find({ category: 'womenClothes' })



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


module.exports = getWomenClothes
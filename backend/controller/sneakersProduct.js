

const productModel = require('../models/productModel')


const sneakersProduct = async (req, res) => {


    try {
 

        const product = await productModel.find({category:'shoe'})
        res.status(201).json({
            success: true,
            error: false,
            data: product

        })

    }

    catch (err) {

        res.json({
            error: true,
            success: true,
            message: err.message
        })

    }


}


module.exports = sneakersProduct
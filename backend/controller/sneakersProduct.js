

const productModel = require('../models/productModel')


const sneakersProduct = async (req, res) => {
    const page = Number(req.query.page) || 1
    const limit = 6
    const countProduct = (page - 1) * limit


    try {


        const product = await productModel.find({ category: 'sneakers' }).
            skip(countProduct).
            limit(limit)
        const totalProducts = await productModel.countDocuments({
            category: "sneakers"
        })
        const totalPages = Math.ceil(totalProducts / limit)
        res.status(201).json({
            success: true,
            error: false,
            data: product,
            totalPages,
            totalProducts,
            currentPage: page,


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
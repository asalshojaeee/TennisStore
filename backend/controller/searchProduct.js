
const productModel = require('../models/productModel')


const searchProduct = async (req, res) => {


    try {
        const query = req.query.q
        const reqExp = new RegExp(query, "i")
        const data = await productModel.find({
            $or: [
                {
                    productName: regesx
                },
                {
                    category: regesx
                }
            ]
        })


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



module.exports = searchProduct
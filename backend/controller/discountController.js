const productModel = require('../models/productModel')



const discountController = async (req, res) => {
    try {

        const products = await productModel.aggregate([
            {
                $match: {
                    category: "sneakers"
                }
            },
            {
                $addFields: {
                    discount: {
                        $divide: [
                            { $subtract: ["$price", "$sellingPrice"] },
                            "$price"
                        ]
                    }
                }
            },
            {
                $sort: {
                    discount: -1
                }
            },
            {
                $limit: 6
            }
        ])

        res.json({
            success: true,
            data: products
        })

    } catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }
}


module.exports = discountController
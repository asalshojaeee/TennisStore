



const productModel = require('../models/productModel')


const getSocksProducts = async (req, res) => {
    try {


        const data = await productModel.find({ productName: 'Socks' })

        res.json({
            success: true,
            error: false,
            data: data
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


module.exports=getSocksProducts
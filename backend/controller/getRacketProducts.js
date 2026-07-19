


const productModel = require('../models/productModel')

const getRacketProducts = async (req, res) => {


    try {
        const data = await productModel.find({ category: 'racket' })


        res.status(200).json({
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



module.exports=getRacketProducts
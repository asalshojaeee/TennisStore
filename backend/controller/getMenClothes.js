const productModel = require("../models/productModel")



const menClothes = async (req, res) => {


    try {


        const data = await productModel.find({ category: 'menClothes' })
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


module.exports=menClothes
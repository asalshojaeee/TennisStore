



const productModel = require('../models/productModel')



const uploadProduct = async (req, res) => {
    try {

        const uploadPro = await productModel(req.body);
        const saveProduct = await uploadPro.save()
        res.status(201).json({
            message: "Product uploaded successfully",
            success: true,
            error: false,
            data: saveProduct

        })

    }
    catch (err) {
        res.json({
            success: false,
            error: true,
            message: err.message
        })
    }
}


module.exports = uploadProduct
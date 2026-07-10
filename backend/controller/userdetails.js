
const userModel = require('../models/users')


const userDetails = async (req, res) => {


    try {
        const user = await userModel.findById(req.userId);
        res.status(200).json({

            success: true,
            error: false,
            data: user

        })

    }
    catch (err) {
        res.json({
            success: false,
            error: true,
            message: err.message || err,
        })
    }

}





module.exports = userDetails
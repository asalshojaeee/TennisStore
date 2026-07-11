
const jwt = require('jsonwebtoken')
require('dotenv').config()


const authorization = async (req, res, next) => {
    try {


        const token = req.cookies.token
        if (!token) {
            throw new Error("No token");
        }

        const decode = jwt.verify(token, "@@8097");

        req.userId = decode._id;

        next();


    }
    catch (err) {


        res.status(401).json({
            success: false,
            message: "Unauthorized"

        })

    }

}


module.exports=authorization
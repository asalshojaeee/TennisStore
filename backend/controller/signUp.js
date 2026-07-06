

const { model } = require('mongoose');
const userModel = require('../models/users');



const signUp = async (req, res) => {
    try {

        const { name, email, password } = req.body
        const user = await userModel.findOne({ email })
        if (user) {
            throw new Error("User already exists")
        }
        if (!email) {
            throw new Error("Please provide email !")

        }
        if (!password) {
            throw new Error("Please provide password !")

        }
        if (!name) {
            throw new Error("Please provide name !")

        }


    }
    catch (err) {

        res.json({
            error: true,
            success: false,
            message: err.message
        })

    }
}



module.exports = signUp
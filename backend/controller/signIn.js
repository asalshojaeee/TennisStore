
const userModel = require('../models/users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const signIn = async (req, res) => {


    try {

        const { email, password } = req.body


        if (!email) {
            throw new Error("Please provide email !")

        }
        if (!password) {
            throw new Error("Please provide password !")

        }
        const currentUser = await userModel.findOne({ email });
        if (!currentUser) {
            throw new Error("User not found!")
        }
        const checkPassword = await bcrypt.compare(password, currentUser.password)


        if (checkPassword) {
            const tokenData = {
                _id: currentUser._id,
                email: currentUser.email
            }

            const token = await jwt.sign(tokenData, "@@8097")
            const tokenOption = {
                httpOnly: true,
                secure: false,
                sameSite: "lax"


            }
            res.cookie("token", token, tokenOption).json({
                message: "Login successfully",
                data: token,
                success: true,
                error: false
            })

        }

        else {
            throw new Error("Please checke password")

        }


    }

    catch (err) {
        res.json({

            success: false,
            error: true,
            message: err.message

        }

        )
    }

}


module.exports = signIn
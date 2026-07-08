

const { model } = require('mongoose');
const userModel = require('../models/users');

const bcrypt = require('bcrypt');

const signUp = async (req, res) => {
    try {

        const { name, email, password } = req.body
        const user = await userModel.findOne({ email })
        if (user) {
            throw new Error("User already exists")
        }
        if (!email) {
            throw new Error("Please provide email!")

        }
        if (!password) {
            throw new Error("Please provide password!")

        }
        if (!name) {
            throw new Error("Please provide name!")

        }
        const hashPassword = await bcrypt.hash(password, 10);
        if (!hashPassword) {
            throw new Error("Something is wrong")
        }

        const payload = {
            ...req.body,
            role: "GENERAL",
            password: hashPassword

        }
        const userData = new userModel(payload);
        const saveUser = await userData.save();
        res.status(201).json({
            data: saveUser,
            error: false,
            success: true,
            message: "User created successfully!"

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



module.exports = signUp



const mongoose = require('mongoose');

require('dotenv').config();
const connectDb = async () => {

    try {
        await mongoose.connect(process.env.DB_URL)

    }

    catch (err) {
        console.log(err)

    }



}


module.exports = connectDb
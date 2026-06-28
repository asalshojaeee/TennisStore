


const mongooes = require('mongoose');

require('dotenv').config();
const connectDb = async () => {

    try {
        await mongooes.connect(process.env.DB_URL)

    }

    catch (err) {
        console.log(err)

    }



}


module.exports = connectDb
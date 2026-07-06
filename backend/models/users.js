


const mongooes = require('mongoose');

    const userSchema = new mongooes.schema({
        name: String,
        email: {
            type: String,
            require: true,
            unigue=true
        },
        password:String,
        role:String
    },{
        timestamps:true
    }


)



const userModel = mongooes.schema("users",userSchema)

module.exports = userModel
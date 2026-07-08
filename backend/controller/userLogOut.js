



const userLogOut = async (req, res) => {


    try {

        res.clearCookie("token");
        res.json({
            message: "log out successfully!",
            error: false,
            success: true,
            data: []

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



module.exports = userLogOut
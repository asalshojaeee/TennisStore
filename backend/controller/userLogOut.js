



const userLogOut = async (req, res) => {


   res.clearCookie("token", {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
    });

    res.json({
        success: true,
        message: "Logout successfully"
    });
};


module.exports = userLogOut
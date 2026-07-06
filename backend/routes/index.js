
const signUp = require('../controller/signUp');

const express = require("express");


const router = express.Router();

router.post('/signup',signUp)




module.exports = router
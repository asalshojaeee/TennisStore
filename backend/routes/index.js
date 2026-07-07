
const signIn = require('../controller/signIn');
const signUp = require('../controller/signUp');

const express = require("express");


const router = express.Router();

router.post('/signup',signUp)
router.post('/login',signIn)




module.exports = router

const signIn = require('../controller/signIn');
const signUp = require('../controller/signUp');

const express = require("express");
const userLogOut = require('../controller/userLogOut');


const router = express.Router();

router.post('/signup', signUp);
router.post('/login', signIn);

router.get('/logout', userLogOut);


module.exports = router
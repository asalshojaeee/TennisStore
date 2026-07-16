
const signIn = require('../controller/signIn');
const signUp = require('../controller/signUp');

const express = require("express");
const userLogOut = require('../controller/userLogOut');
const userDetails = require('../controller/userdetails');
const authorization = require('../middleware/authorization');
const uploadProduct = require('../controller/uploadProduct');
const sneakersProduct = require('../controller/sneakersProduct');


const router = express.Router();

router.post('/signup', signUp);
router.post('/login', signIn);

router.get('/logout', userLogOut);

router.get('/userdetail', authorization,userDetails);
router.post('/uploadproduct',authorization,uploadProduct);
router.get('/getsneakersproduct',sneakersProduct)

module.exports = router
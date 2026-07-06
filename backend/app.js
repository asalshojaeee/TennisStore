const express = require('express');
const router = require('./routes')
const app = express()
const cors = require('cors')
require('dotenv').config();












app.use('/api', router)

app.listen(process.env.PORT, () => {

  console.log("server is running")

})
const express = require('express');
const mongoose = require("mongoose");
const router = require('./routes')
const app = express()
const cors = require('cors')
const cookieParser = require("cookie-parser");

app.use(cookieParser());
require('dotenv').config();

app.use(express.json());

app.use(cors({
  origin: process.env.FRONT_URL,
  credentials: true
}))



app.use('/api', router)

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
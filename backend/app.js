const express = require('express');
const mongoose = require("mongoose");
const router = require('./routes')
const multer = require('multer')
const path = require('path')
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




const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });


app.post("/api/upload", upload.single("image"), (req, res) => {

  const imageUrl = `http://localhost:3000/uploads/${req.file.filename}`;

  res.json({
    success: true,
    error: false,
    imageUrl
  });

});
app.use("/uploads", express.static("uploads"));

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
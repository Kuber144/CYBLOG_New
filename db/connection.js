require("dotenv").config();
const mongoose = require("mongoose");
const url = `mongodb://localhost:27017/Malware_bits`;
mongoose
  .connect(url)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

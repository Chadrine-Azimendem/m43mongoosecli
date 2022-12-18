require("dotenv").config(); // import the dotenv
const mongoose = require("mongoose"); // import mongoose

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected");
  } catch (error) {
    console.log(error);
  }
};

//run the connection
connect();

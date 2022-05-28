const mongoose = require("mongoose");

// db : ()=>{mongoose.connect(
//   "mongodb+srv://Albin:7cBHeEkPfxa2w7I2@cluster0.s8f72et.mongodb.net/?retryWrites=true&w=majority"
// )}

const connectDB = async () => { 
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://Albin:7cBHeEkPfxa2w7I2@cluster0.s8f72et.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(`MongoDB Connected:${conn.connection.host}`);
  } catch (err) {
    console.log(`error:${err.message}`);
    process.exit();
  }
};

module.exports = connectDB;
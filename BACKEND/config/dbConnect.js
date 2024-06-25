const mongoose = require("mongoose");
// const dotenv = require('dotenv');

 const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected successfully!!!");
    } catch (error) {
        console.log("DB connection failed", error.message);
    }
 };

 dbConnect();
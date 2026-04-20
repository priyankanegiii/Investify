require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT=process.env.PORT || 3002;
const url = process.env.MONGO_URL;


//To start server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    mongoose.connect(url);
    console.log("Connected to MongoDB");
});
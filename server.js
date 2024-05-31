const express = require('express');
const mongoose = require('mongoose');
const  bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();


//import routes
const restaurantRoutes = require('./routes/restaurant');

//app midleware
app.use(bodyParser.json());
app.use(cors());
app.use(restaurantRoutes);

// Environment Variables
const PORT = process.env.PORT || 8000;
const DB_URL = process.env.DB_URL;

// Connect to MongoDB
mongoose.connect(DB_URL,{
    
})
.then(()=>{
    console.log('DB Connected')
})
.catch((err)=> console.log('DB connection Error', err));false   

// Start the server
app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});
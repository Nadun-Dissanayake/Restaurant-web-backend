const express = require('express');
const mongoose = require('mongoose');
const  bodyParser = require('body-parser'); // Convert jason request to java script object. because server cant understand java script object
const cors = require('cors');
const app = express();

//import routes
const restaurantRoutes = require('./routes/restaurant');

//app midleware
app.use(bodyParser.json());
app.use(cors());
app.use(restaurantRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://test:test123@restaurantapp.tz1auai.mongodb.net/?retryWrites=true&w=majority&appName=restaurantApp';

mongoose.connect(DB_URL,{
    
})
.then(()=>{
    console.log('DB Connected')
})
.catch((err)=> console.log('DB connection Error', err));

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});
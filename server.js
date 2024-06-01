const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


// Import routes
const restaurantRoutes = require('./routes/restaurant');

// App middleware
app.use(bodyParser.json());
app.use(cors());
app.use(restaurantRoutes);

// Environment Variables
const PORT = 8000;
const DB_URL= "mongodb+srv://test:test123@restaurantapp.tz1auai.mongodb.net/?retryWrites=true&w=majority&appName=restaurantApp" || "mongodb://mongo:27017/restaurantApp"


// Connect to MongoDB
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('DB Connected');
})
.catch((err) => console.log('DB connection Error', err));

// Start the server
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});

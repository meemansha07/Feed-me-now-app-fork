const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mongoDB = require("./db");
const hbs = require("hbs");

const app = express();
const port = 5000;

// Connect to MongoDB
mongoDB();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

// Routes
app.use('/api', require('./Routes/CreatUser')); // Assuming this handles user creation
app.use('/api', require('./Routes/DisplayData'));

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
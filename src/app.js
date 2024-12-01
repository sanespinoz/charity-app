const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const routes = require('./routes'); // Automatically looks for index.js


require('dotenv').config(); // Loads environment variables


const app = express();


// Middleware for parsing JSON
app.use(express.json());


// Connect to MongoDB
connectDB();

// Basic route
app.get('/', (req, res) => {
  res.send('Bienvenido a Charity App');
});

// Test database connection route

app.get('/test-db', async (req, res) => {
  try {
    const dbState = mongoose.connection.readyState;
    const status = ['disconnected', 'connected', 'connecting', 'disconnecting'];
    res.json({ dbState: status[dbState] });
  } catch (err) {
    res.status(500).json({ message: 'Error checking database connection', error: err.message });
  }
});

// Use the centralized routes
app.use('/api', routes);

module.exports = app;



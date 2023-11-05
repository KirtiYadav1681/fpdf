const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/PdfAi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Acquire the connection to check if it is successful
const db = mongoose.connection;

// On error
db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

// If it is up and running, then print this message
db.once('open', function () {
    console.log('Successfully connected to the database');
});

module.exports = db;

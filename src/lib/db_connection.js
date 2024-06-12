const mongoose = require('mongoose');

async function connection() {
    try {
      await mongoose.connect(process.env.DB_URI);
      console.log('Connected to MongoDB');
    } catch (err) {
      console.log("failed to connect", err);
    }
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

module.exports = connection
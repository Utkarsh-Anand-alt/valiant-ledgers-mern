const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/valiant_ledgers';
    await mongoose.connect(uri);
    console.log('MongoDB connected:', uri);
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    console.error('The server will keep running so the contact form can still send emails, but submissions will not be saved to the database until MongoDB is reachable.');
  }
};

module.exports = connectDB;

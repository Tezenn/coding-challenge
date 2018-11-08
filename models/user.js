const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: String,
  name: String,
  email: String,
  role: String
});

const User = mongoose.model('User', userSchema);

module.exports = { mongoose, userSchema, User };

const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
  _id: String,
  amountInsured: Number,
  email: String,
  inceptionDate: Date,
  installedPayment: Boolean,
  clientId: String
});

const Policy = mongoose.model('Policy', policySchema);

module.exports = { mongoose, policySchema, Policy };

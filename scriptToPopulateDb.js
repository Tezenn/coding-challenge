require('dotenv').config();

const mongoose = require('mongoose');
const fetch = require('node-fetch');
const userModel = require('./models/user');
const policyModel = require('./models/policy');

mongoose.connect(process.env.MONGOURL);

let fetchedUsers, fetchedPolicies;

const populateUsers = async () => {
  fetchedUsers = await fetch('http://www.mocky.io/v2/5808862710000087232b75ac')
    .then(res => res.json())
    .then(res => res.clients);

  fetchedUsers.forEach(el => {
    let newUser = new userModel.User({ _id: el.id, ...el }).save(
      (err, data) => {
        if (err) console.error(err);
        console.log('saved');
      }
    );
  });
};

const populatePolicies = async () => {
  fetchedPolicies = await fetch(
    'http://www.mocky.io/v2/580891a4100000e8242b75c5'
  )
    .then(res => res.json())
    .then(res => res.policies);

  fetchedPolicies.forEach(el => {
    let newPolicy = new policyModel.Policy({ _id: el.id, ...el }).save(
      (err, data) => {
        if (err) console.error(err);
        console.log('policy saved');
      }
    );
  });
};

const populateDatabase = async () => {
  await populateUsers();
  await populatePolicies();
};

populateDatabase();

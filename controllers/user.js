let userModel = require('../models/user');

exports.createUser = async (req, res) => {
  const userInfo = req.body;
  let newUser = await new userModel.User({
    _id: userInfo.id,
    ...userInfo
  }).save();
  if (newUser) {
    res.status(201).send('User saved');
  }
};

exports.getUserById = async (req, res) => {
  const id = req.params.id;
  const requestedUser = await userModel.User.findOne({ _id: id });
  if (requestedUser) {
    res.status(200).send(requestedUser);
  } else {
    res.status(404).send({ error: 'user not found' });
  }
};

exports.getUserByUsername = async (req, res) => {
  const name = req.params.username;
  const requestedUser = await userModel.User.findOne({ name });
  if (requestedUser) {
    res.status(200).send(requestedUser);
  } else {
    res.status(404).send({ error: 'user not found' });
  }
};

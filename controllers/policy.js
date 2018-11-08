const policyModel = require('../models/policy');
const userModel = require('../models/user');

exports.createPolicy = async (req, res) => {
  let policyInfo = req.body;
  let newPolicy = await new policyModel.Policy({
    _id: policyInfo.id,
    ...policyInfo
  }).save();
  if (newPolicy) res.status(201).send('Policy saved');
};

exports.getPoliciesByUsername = async (req, res) => {
  const username = req.params.username;
  const user = await userModel.User.findOne({ name: username });
  if (user) {
    const requestedPolicies = await policyModel.Policy.find({
      clientId: user._id
    });
    res.send(requestedPolicies);
  } else {
    res.status(404).send({ error: 'user not found' });
  }
};

exports.getUserByPolicyId = async (req, res) => {
  const policyId = req.params.policy_id;
  const policy = await policyModel.Policy.findOne({ _id: policyId });
  if (policy) {
    const clientId = policy.clientId;
    const requestedUser = await userModel.User.findOne({ _id: clientId });
    res.status(200).send(requestedUser);
  } else {
    res.status(404).send({ error: 'policy not found' });
  }
};

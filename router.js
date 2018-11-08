const express = require('express');
const router = express.Router();
const userController = require('./controllers/user');
const policyController = require('./controllers/policy');
const auth = require('./auth').auth;

router.post('/user', userController.createUser);
router.get('/user/id/:id', userController.getUserById);
router.get('/user/username/:username', userController.getUserByUsername);

router.post('/policy', policyController.createPolicy);
router.get(
  '/policy/username/:username',
  auth,
  policyController.getPoliciesByUsername
);
router.get('/policy/id/:policy_id', auth, policyController.getUserByPolicyId);

module.exports = router;

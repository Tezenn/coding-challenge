const userModel = require('./models/user');

exports.auth = async (req, res, next) => {
  if (!req.headers.authorization)
    res
      .status(403)
      .send({ error: 'You are not authorized to access this information' });
  const id = req.headers.authorization.split(' ')[1];
  const role = await userModel.User.findOne({ _id: id });
  if (role && role.role === 'admin') {
    next();
  } else {
    res
      .status(403)
      .send({ error: 'You are not authorized to access this information' });
  }
};

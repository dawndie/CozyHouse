const jwt = require("jsonwebtoken");

const { User } = require("../models/user.js");
const ERROR = require("../types/error");
const {
  StatusCustomer
} = require("../public/customer");

const register = async ({ username, CMND, address, phone, email, password, role, gender, dateOfBirth } ) => {
  const user = await User.findOne({ username });
  const status = 0;
  if (user) throw new Error(ERROR.USERNAME_EXISTED);
  const newUser = new User({
    username,
    CMND,
    address,
    phone,
    email,
    dateOfBirth,
    gender,    
    role,
    status
  });
  newUser.generatePassword(password);
  return newUser.save();
};

const login = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) throw new Error(ERROR.USERNAME_NOT_EXISTED);
  if (!user.validatePassword(password)) {
    throw new Error(ERROR.PASSWORD_NOT_MATCHED);
  }
  return user;
};

const generateJWT = (user) => {
  const accessToken = jwt.sign(
    { username: user.username },
    process.env.JWT_SECRET
  );
  return accessToken;
};

const generateSession = (user) => {
  const accessToken = jwt.sign(
    { exp: Math.floor(Date.now() / 1000) + 60 * 10, username: user.username },
    process.env.JWT_SECRET
  );
  return accessToken;
};

module.exports = { register, login, generateJWT, generateSession };

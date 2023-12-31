const Shop = require("../models/shopModel");
const jwt = require("jsonwebtoken");

//here we have created a function which signs a jwt token using the respective id of the user using the env from which we use the secret to hash and which will expire in 3 days.
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

//login shop
const loginShop = async (req, res) => {
  const { email, password } = req.body;

  try {
    //here the login method returns a user with hashed password and email which we have matched using the userSchema.statics method
    const shop = await Shop.login(email, password);

    //create a token
    const token = createToken(shop._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup shop
const signupShop = async (req, res) => {
  const { email, password } = req.body;

  try {
    //here the signup method returns a user with hashed password and email which we have created using the userSchema.statics method
    const shop = await Shop.signup(email, password);

    const token = createToken(shop._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginShop, signupShop };
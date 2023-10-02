const Customer = require("../models/cusotmerModel");
const mongoose = require("mongoose");

const getCustomers = async (req, res) => {
  const user_id = req.user._id;
  const customers = await Customer.find({user_id}).sort({ createdAt: -1 });
  res.status(200).json(customers);
};

const getCustomer = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such customer" });
  }
  const customer = await Customer.findById(id);

  if (!customer) {
    return res.status(404).json({ error: "No such customer" });
  }
  res.status(200).json(customer);
};

const createCustomer = async (req, res) => {
  //destructuring
  const { name, email, contact } = req.body;

  //error handling
  let emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }
  if (!email) {
    emptyFields.push("email");
  }
  if (!contact) {
    emptyFields.push("contact");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "please fill in all the fields", emptyFields });
  }

  //add doc to db
  try {
    // so we added the user property to the req as req.user in the authContext so we can use it here to get the user id
    const user_id = req.user._id;
    console.log(user_id);
    const customer = await Customer.create({ name, email,user_id, contact });
    console.log(customer);
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such customer" });
  }

  const customer = await Customer.findOneAndDelete({ _id: id });

  if (!customer) {
    return res.status(404).json({ error: "No such customer" });
  }
  res.status(200).json(customer);
};

const updateCustomer = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such customer" });
  }
  const customer = await Customer.findOneAndUpdate({ _id: id }, { ...req.body }); //... spread operator helps to convert the json into an object

  if (!customer) {
    return res.status(404).json({ error: "No such customer" });
  }
  res.status(200).json(customer);
};

module.exports = {
    getCustomers,
    getCustomer,
    createCustomer,
  deleteCustomer,
  updateCustomer,
};
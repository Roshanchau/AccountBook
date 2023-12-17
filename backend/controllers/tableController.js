const Table = require("../models/tableModel");
const mongoose = require("mongoose");

const getTable = async (req, res) => {
  const { id } = req.params;
  const customer_id=id;
  console.log(customer_id)
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such table" });
  }

  const table = await Table.find({customer_id});

  if (!table) {
    return res.status(404).json({ error: "No such table" });
  }
  res.status(200).json(table);
};

const createTable = async (req, res) => {
  const { id } = req.params;
  const customer_id = id;
  // destructuring
  const { items, price, remarks, date, serial, monthkey } = req.body;
  //error handling
  let emptyFields = [];

  if (!items) {
    emptyFields.push("items");
  }
  if (!price) {
    emptyFields.push("price");
  }
  if (!remarks) {
    emptyFields.push("remarks");
  }
  if (!date) {
    emptyFields.push("date");
  }
  if (!serial) {
    emptyFields.push("serial");
  }
  if (!monthkey) {
    emptyFields.push("monthkey");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "please fill in all the fields", emptyFields });
  }
  try {
    const table = await Table.create({
      items,
      price,
      remarks,
      date,
      serial,
      monthkey,
      customer_id,
    });
    console.log(table);
    res.status(200).json(table);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTable,
  createTable,
};


const express = require("express");

//controller
const { loginShop, signupShop } = require("../controllers/shopController");

const router = express.Router();

//login route
router.post("/login", loginShop);

//signup route
router.post("/signup", signupShop);

module.exports = router;
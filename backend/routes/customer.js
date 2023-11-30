const express = require("express");
const router = express.Router();
const {
    getCustomers,
    getCustomer,
    createCustomer,
  deleteCustomer,
  updateCustomer,
  removeAllCustomers,
} = require("../controllers/customerController");
const requireAuth=require("../middleware/requireAuth");

router.use(requireAuth);


//get all customers  
router.get("/", getCustomers);

//get single customers
router.get("/:id", getCustomer);

//post a new customers
router.post("/", createCustomer);

//delete a customers
router.delete("/:id", deleteCustomer);

// remove all customers
router.delete("/", removeAllCustomers);

//update a customers
router.patch("/:id", updateCustomer);

module.exports = router;
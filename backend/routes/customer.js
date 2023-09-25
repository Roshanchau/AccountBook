const express = require("express");
const router = express.Router();
const {
    getCustomers,
    getCustomer,
    createCustomer,
  deleteCustomer,
  updateCustomer,
} = require("../controllers/customerController");
const requireAuth=require("../middleware/requireAuth");

router.use(requireAuth);


//get all workouts  
router.get("/", getCustomers);

//get single workout
router.get("/:id", getCustomer);

//post a new workout
router.post("/", createCustomer);

//delete a workout
router.delete("/:id", deleteCustomer);

//update a workout
router.patch("/:id", updateCustomer);

module.exports = router;
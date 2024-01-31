const express = require("express");
const router = express.Router();

const {
  deleteUser,
  createUser,
  getAdmin,
  makeAdmin,
  getAllUsers,
} = require("../controllers/userControllers");
const verifyAdmin = require("../middlewares/verifyAdmin");
const verifyToken = require("../middlewares/verifyToken");

router.route("/").get(verifyToken, verifyAdmin, getAllUsers).post(createUser);
router.delete("/:id", verifyToken, verifyAdmin, deleteUser);
router.get("/admin/:email", verifyToken, getAdmin);
router.patch("/admin/:id", verifyToken, verifyAdmin, makeAdmin);

module.exports = router;

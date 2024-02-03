const express = require("express");
const router = express.Router();

const {
  getCartByEmail,
  addToCart,
  deleteCart,
  updateCart,
  getSingleCart,
} = require("../controllers/cartControllers");
const verifyToken = require("../middlewares/verifyToken");

router.route("/").get(verifyToken, getCartByEmail).post(addToCart);
// router.route("/").get(getCartByEmail).post(addToCart);

router.route("/:id").get(getSingleCart).delete(deleteCart).put(updateCart);

module.exports = router;

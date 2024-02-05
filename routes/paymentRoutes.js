const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const Carts = require("../model/Carts");
const Payment = require("../model/Payment");
const mongoose = require("mongoose");

const ObjectId = mongoose.Types.ObjectId;

router.route("/").post(verifyToken, async (req, res) => {
  try {
    const payment = await Payment.create(req.body);
    if (!payment) {
      res.status(500).json({ message: "error in save payment" });
    }

    const cartIDs = payment.cartItems.map((id) => new ObjectId(id));
    const deletePaymentrequest = await Carts.deleteMany({
      _id: { $in: cartIDs },
    });
    res.status(200).json({ payment, deletePaymentrequest });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

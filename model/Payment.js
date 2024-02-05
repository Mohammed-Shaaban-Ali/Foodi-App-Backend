const mongoose = require("mongoose");
const { Schema } = mongoose;

// schema model
const PaymentSchema = new Schema(
  {
    name: String,
    email: String,
    ransitionId: String,
    price: Number,
    quantity: Number,
    itemNames: Array,
    cartItems: Array,
    menuItem: Array,
  },
  { timestamps: true }
);

// create a model instance
const Payment = mongoose.model("Payment", PaymentSchema);

module.exports = Payment;

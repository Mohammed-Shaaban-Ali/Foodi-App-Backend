const express = require("express");
const app = express();
const cors = require("cors");
const connectToDb = require("./config/connectToDb");
const jwt = require("jsonwebtoken");

const port = process.env.PORT || 8000;
require("dotenv").config();
// middleware
app.use(cors());
app.use(express.json());

// Database
connectToDb();

//jwt authentication
app.post("/api/v1/jwt", (req, res) => {
  const user = req.body;
  // console.log(req.body);
  const token = jwt.sign(user, "test", { expiresIn: "1hr" });

  res.send({ token });
});

// routes
app.use("/api/v1/menu", require("./routes/menuRoute"));
app.use("/api/v1/cart", require("./routes/cartRoutes"));
app.use("/api/v1/users", require("./routes/userRoutes"));
app.use("/api/v1/payment", require("./routes/paymentRoutes"));

const stripe = require("stripe")(
  "sk_test_51Og69dFHvGpthwwMXela0sP1vcpFx7t0Gzqvq1WTWGiWaPh6QmLiIxCDlIKu1KWOtyLvoTgRnXVKpZKMnS12xGGA00ll0o876l"
);
app.post("/api/v1/create-payment-intent", async (req, res) => {
  const { price } = req.body;
  const amount = price * 100;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

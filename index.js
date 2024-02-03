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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

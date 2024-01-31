const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;
require("dotenv").config();
const connectToDb = require("./config/connectToDb");

// Database
connectToDb();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/menu", require("./routes/menuRoute"));
app.use("/api/v1/cart", require("./routes/cartRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

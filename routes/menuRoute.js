const { getAllMenu, createMenu } = require("../controllers/menuController");

const router = require("express").Router();

router.route("/").get(getAllMenu).post(createMenu);

module.exports = router;

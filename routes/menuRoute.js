const {
  getAllMenu,
  createMenu,
  deleteMenu,
} = require("../controllers/menuController");

const router = require("express").Router();

router.route("/").get(getAllMenu).post(createMenu);
router.route("/:id").delete(deleteMenu);

module.exports = router;

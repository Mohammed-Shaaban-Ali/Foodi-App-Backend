const {
  getAllMenu,
  createMenu,
  deleteMenu,
  getMenu,
  updateMenu,
} = require("../controllers/menuController");

const router = require("express").Router();

router.route("/").get(getAllMenu).post(createMenu);
router.route("/:id").delete(deleteMenu).get(getMenu).put(updateMenu);

module.exports = router;

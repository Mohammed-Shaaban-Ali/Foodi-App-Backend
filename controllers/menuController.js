const Menu = require("../model/Menu");

const getAllMenu = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMenu = async (req, res) => {
  try {
    const menu = await Menu.create(req.body);
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllMenu, createMenu };

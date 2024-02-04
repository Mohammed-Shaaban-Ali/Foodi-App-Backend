const Menu = require("../model/Menu");

const getAllMenu = async (req, res) => {
  try {
    const menus = await Menu.find().sort({ createdAt: -1 });
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
const deleteMenu = async (req, res) => {
  try {
    const menu = await Menu.findOneAndDelete({ _id: req.params.id });

    if (!menu) {
      return res.status(401).json({ message: "menu Items not found!" });
    }
    res.status(200).json({ message: "menu Item Deleted Successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMenu = async (req, res) => {
  try {
    const menu = await Menu.findById({ _id: req.params.id });

    if (!menu) {
      return res.status(401).json({ message: "menu Items not found!" });
    }
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateMenu = async (req, res) => {
  try {
    const menu = await Menu.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );

    if (!menu) {
      return res.status(401).json({ message: "menu Items not found!" });
    }
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllMenu, createMenu, deleteMenu, getMenu, updateMenu };

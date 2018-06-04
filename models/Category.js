const db = require("../database/connection");

const Category = {};

Category.all = () => {
  return db.any("SELECT * FROM categories");
};

Category.findById = id => {
  return db.one("SELECT * FROM categories WHERE category_id = ${id}", { id: id });
};

module.exports = Category;

const db = require("../database/connection");

const Liquor = {};

Liquor.all = () => {
  return db.any("SELECT * FROM quotes");
};

// Liquor.findById = id => {
//   return db.one("SELECT * FROM quotes WHERE id = ${id}", { id: id });
// };

// Liquor.create = newQuote => {
//   return db.one(
//     "INSERT INTO quotes (author, content, category_id) VALUES (${author}, ${content}, ${category_id}) RETURNING *", newQuote
//     )
// };

// Liquor.updateById = updatedQuote => {
//   return db.none("UPDATE quotes SET author = ${author}, content = ${content}, category_id = ${category_id} WHERE id = ${id}", updatedQuote)
// }

// Liquor.delete = id => {
//   return db.result("DELETE FROM quotes WHERE id = ${id}", { id: id });
// };

// Liquor.allByCategoryId = category_id => {
//   return db.any("SELECT * FROM quotes WHERE category_id = ${category_id}", {category_id: category_id});
// };

module.exports = Liquor;

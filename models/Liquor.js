const db = require("../database/connection");

const Liquor = {};

Liquor.all = () => {
  return db.any("SELECT * FROM liquors");
};

Liquor.findById = id => {
  return db.one("SELECT * FROM liquors WHERE liquor_id = ${id}", { id: id });
};

Liquor.create = newLiquor => {
  return db.one("INSERT INTO liquors (name, proof, size, leftover, location, img, category_id) VALUES (${name}, ${proof}, ${size}, ${leftover}, ${location}, ${img}, ${category_id}) RETURNING *", newLiquor);
};

Liquor.updateById = updatedLiquor => {
  return db.none(
    "UPDATE liquors SET name = ${name}, proof = ${proof}, size = ${size}, leftover = ${leftover}, location = ${location}, img = ${img}, category_id = ${category_id} WHERE liquor_id = ${id}", updatedLiquor)
}

Liquor.delete = id => {
  return db.result("DELETE FROM liquors WHERE liquor_id = ${id}", { id: id });
};

Liquor.allByCategoryId = category_id => {
  return db.any("SELECT * FROM liquors WHERE category_id = ${category_id}", {category_id: category_id});
};

module.exports = Liquor;

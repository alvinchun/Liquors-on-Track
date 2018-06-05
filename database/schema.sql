-- DROP DATABASE liquor_app;
-- CREATE DATABASE liquor_app;

-- \c liquor_app

DROP TABLE IF EXISTS liquors;
DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
  category_id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE liquors (
  liquor_id SERIAL PRIMARY KEY,
  name VARCHAR(400) NOT NULL,
  category_id INTEGER REFERENCES categories(category_id),
  proof VARCHAR(400) NOT NULL,
  size VARCHAR(400) NOT NULL,
  leftover VARCHAR(400) NOT NULL,
  location VARCHAR(400) NOT NULL,
  img VARCHAR(400) NOT NULL
);

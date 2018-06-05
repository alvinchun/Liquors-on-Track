-- \c liquor_app

DELETE FROM liquors;
DELETE FROM categories;

INSERT INTO categories (name) VALUES ('Wine');
INSERT INTO categories (name) VALUES ('Cognac');
INSERT INTO categories (name) VALUES ('Whiskey');
INSERT INTO categories (name) VALUES ('Vodka');
INSERT INTO categories (name) VALUES ('Tequila');

INSERT INTO liquors (name, proof, size, leftover, location, img, category_id)
VALUES ('Johnny Walker Blue Label', '70%', '700ml', '300ml', 'W1', 'https://www.bottlevalues.com/images/sites/bottlevalues/labels/johnnie-walker-blue-label-scotch.jpg', 3);


const express = require("express");
const path = require("path");
const Liquor = require("./models/Liquor");
const Category = require("./models/Category");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();

// Allow override of HTTP methods based on the query string ?_method=DELETE
app.use(methodOverride("_method"));

// Add the HTTP body onto the request object in all route handlers.
app.use(bodyParser.urlencoded({ extended: false }));

// Allow the port to be set by an environment variable when run (PORT=4000 node server.js)
// and fallback to a default to 4567 if it's not supplied.
const PORT = process.env.PORT || 4567;

// Serve any files in the public folder at the "/public" route.
app.use("/public", express.static("public"));

// Set the folder for where our views are.
// we're turning off the app.set function because express defaults to the "views" directory by convention now
// app.set("views", path.join(__dirname, "views"));

// Tell Express that we use EJS in our views.
app.set("view engine", "ejs");

app.get("/", (request, response) => {
    response.render("home/index");
  });

app.get("/categories", (request, response) => {
  Category.all().then(categoryData => {
    response.render("categories/index", { categories: categoryData });
  });
});

app.get("/liquors", (request, response) => {
  Liquor.all().then(liquorData => {
    response.render("liquors/index", { liquors: liquorData });
  });
});

app.post("/liquors", (request, response) => {
  const newLiquor = request.body;
  Liquor.create(newLiquor).then(liquorData => {
    response.redirect(302, "/liquors");
  });
});

app.get("/liquors/new", (request, response) => {
  response.render("liquors/new");
});

app.get("/liquors/:id/edit", (request, response) => {
  const id = Number(request.params.id);
  Liquor.findById(id).then(liquorData => {
    response.render("liquors/edit", { liquor: liquorData })
  })
});

app.put("/liquors/:id", (request, response) => {
  const updatedLiquor = request.body;
  updatedLiquor.id = request.params.id;
  Liquor.updateById(updatedLiquor).then(liquorData => {
    response.redirect(302, `/liquors/${updatedLiquor.id}`);
  })
});

app.get("/liquors/:id", (request, response) => {
  const id = Number(request.params.id);
  Liquor.findById(id).then(liquorData => {
    response.render("liquors/show", { liquor: liquorData })
  })
});

app.delete("/liquors/:id", (request, response) => {
  const id = Number(request.params.id);
  Liquor.delete(id).then(liquor => {
    response.redirect(302, "/liquors");
  })
});

// app.get("/categories/:id", (request, response) => {
//   const id = Number(request.params.id);
//   Promise.all([
//     Category.findById(id),
//     Liquor.allByCategoryId(id)
//   ]).then(([category, liquors]) => {
//     response.render("categories/show", { category: category, liquors: liquors });
//   });
// });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

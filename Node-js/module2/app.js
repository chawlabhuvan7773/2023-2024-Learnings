const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  console.log("This always runs middleware");
  next();
});

app.use("/users", (req, res, next) => {
  console.log("This is a dummy user middleware");
  next();
});

app.get("/", (req, res) => {
  res.send("<p>This is the root route</p>");
});

app.get("/users", (req, res) => {
  res.send("<p>This is the users route</p>");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

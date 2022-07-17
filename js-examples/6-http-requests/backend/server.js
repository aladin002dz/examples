const express = require("express");
const products = require("./data.js");
const app = express();
const port = 3001;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

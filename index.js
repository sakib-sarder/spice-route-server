const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const chefs = require("./Data/chefs.json");
const images = require("./Data/photo.json");
const articles = require("./Data/article.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello From Spice Store");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const singleChef = chefs.find((c) => c.id == id);
  res.send(singleChef);
});

app.get("/images", (req, res) => {
  res.send(images);
});

app.get("/articles", (req, res) => {
    res.send(articles);
})

app.listen(port, () => {
  console.log(`My Server is Running on Port: ${port}`);
});

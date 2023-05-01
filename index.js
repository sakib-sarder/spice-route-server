const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const chefs = require('./Data/chefs.json')
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello From My Restaurant");
})

app.get("/chefs", (req, res) => {
    res.send(chefs);
})

app.listen(port, () => {
    console.log(`My Server is Running on Port: ${port}`);
})
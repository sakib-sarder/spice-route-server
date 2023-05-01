const express = require('express');
const app = express();
const port = 5000;
app.get("/", (req, res) => {
    res.send("Hello From My Restaurant");
})

app.listen(port, () => {
    console.log(`My Server is Running on Port: ${port}`);
})
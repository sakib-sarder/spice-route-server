const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello From My Restaurant");
})

app.listen(port, () => {
    console.log(`My Server is Running on Port: ${port}`);
})
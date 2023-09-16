const express = require('express');
const app = express();

// Load all the configuration from the env file
require("dotenv").config();
const port = process.env.PORT || 3011; // Corrected variable name to PORT

app.use(express.json());

const todoRoute = require('./routes/TodoRoute');

app.use('/v1', todoRoute);

app.listen(port, () => {
    console.log("Your Server has been started ");
});

const dbConnect = require("./config/dbConnection");
dbConnect();

app.get("/", (req, res) => {
    res.send('Welcome to the home');
});

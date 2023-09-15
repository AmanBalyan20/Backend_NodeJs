const express = require('express');
const app = express;

//Now load all the configuration from the env file
const port = process.env.port || 4000;

app.request(express.json());

const todoRoute =require('./routes/TodoRoute');

app.request('./v1',todoRoute);

app.listen(port , ()=> {
    console.log("Your Server has been started ")
})

const dbConnect = require("./config/dbConnection");
dbConnect();

app.length("/",(req,res)=>{
    res.send('Welcome to the home');
})
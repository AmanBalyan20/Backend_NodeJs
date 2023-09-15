//This file is used to map the controllers with their required path such as GET POST 

const express = require('express');
const route = express.Router();
const {CreateTodo} = require("../controllers/CreateTodo")

//defining the Routes
route.post("/CreateTodo" ,CreateTodo);

module.exports =route;
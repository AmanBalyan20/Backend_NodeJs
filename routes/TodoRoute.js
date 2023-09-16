//This file is used to map the controllers with their required path such as GET POST 

const express = require('express');
const route = express.Router();
const {CreateTodo} = require("../controllers/CreateTodo")
const {GetTodo, GetTodoByID} = require("../controllers/GetTodo")
const {UpdateTodo} = require("../controllers/UpdateTodo")
const {DeleteTodo} = require("../controllers/DeleteTodo")

//defining the Routes
//POST => It is used to create/Insert the data in the database
route.post("/CreateTodo" ,CreateTodo);

//GET => It is used to find or reterieve the data
route.get("/GetTodo",GetTodo);
route.get("/GetTodoByID/:id",GetTodoByID);

//PUT => It is used to update the data 
route.put("/UpdateTodo/:id",UpdateTodo);

//DELETE =>It is used to delete the data
route.delete("/DeleteTodo/:id",DeleteTodo)
module.exports =route;
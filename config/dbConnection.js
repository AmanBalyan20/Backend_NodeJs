//This file is made to ensure the connection to the database

const mongoose = require('mongoose');

const dbConnection =() => {
    mongoose.connect(
        process.env.DBUrl,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        }
    )
    .then( () => console.log("Success") )
    .catch( (err) => {
        console.log("Server Issue");
        console.log(err.message);
        process.exit(1)
    });
}

modules.exports = dbConnection;
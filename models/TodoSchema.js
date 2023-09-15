//This file is used to make the Schema/Structure of the databse
const mongoose = require('mongoose');

const TSchema = new mongoose.Schema(
    {
        Tittle:{
            type:String,
            required:true,
            maxlength :30,
        },
        Description: {
            type:String,
            required:true,
            maxlength :50,
        },
        CreatedAt:{
            type:Date,
            required:true,
            default:Date.now,
        },
        UpdatedAt:{
            type:Date,
            required:true,
            default:Date.now,
        },
    }
);

module . exports = mongoose.model("TodoSchema", TSchema);
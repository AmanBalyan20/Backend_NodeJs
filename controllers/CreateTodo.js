//This file contains all the logic that what will gona be happen to the databse 

const Todo = require('..\models\TodoSchema');

exports.CreateTodo = async (req ,res) => {
  try{
    //This step is used to extract title and description using the Destructring
    const{ Tittle , Description } = req.body;

    //Creating the objects and inserting into the DataBase
    const response = await Todo.create({Tittle,Description});
    
    //Sending the json data
    res.status(200).json(
        {
            success:true,
            data : response,
            message:'Your Data has been successfully stored in the databse using the Create Controller'
        });
  }  
  catch(err){
    console.error(err);
    console.log(err);
    res.status(500).json({
        success:false,
        data:"You have an server issue while creating the data",
        message: err.message,
    });
  }
    
}
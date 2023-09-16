const Todo = require("../models/TodoSchema");

exports.UpdateTodo = async (req,res) => {
    try{
        const {id} =req.params;
        const {Tittle, Description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {
                _id : id,
            },
            {
                Tittle,
                Description,
                UpdatedAt : Date.now()
            }
        )
        res.status(200).json({
            success:true,
            data:todo,
            message:"Your Data has been updated successfully "
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            error:err.message,
            message:"There is an server error while updating the data"
        })

    }
}
const Todo = require("../models/TodoSchema");

exports.DeleteTodo = async(req, res)=>{
    try{
        const {id} = req.params;
        const todo = await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:" Data has been successfully deleted "
        })

    }
    catch(err){
        res.status(500).json({
            success:false,
            error : err.message,
            message:"There is an issue while deleting the data"
        })

    }
}
//To reterieve all the data from the Database
const Todo = require("../models/TodoSchema");

exports.GetTodo = async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json({
            success: true,
            data: todos,
            message: 'Your Data has been successfully fetched from the database'
        });

    }
    catch {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            data: "You have an server issue while creating the data",
            message: err.message,
        });
    }
}
// exports.getTodoById = async (req, res) => {
//     try {
//       const id = req.params.id;
//       const todo = await Todo.findById({ _id: id });
  
//       if (!todo) {
//         return res.status(404).json({
//           success: false,
//           message: "No Data Found with Given Id",
//         });
//       }
//       res.status(200).json({
//         success: true,
//         data: todo,
//         message: "Success",
//       });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({
//         success: false,
//         error: err.message,
//         message: "Server error",
//       });
//     }
//   };
  
exports.GetTodoByID = async (req ,res) =>{
    try{
          const id = req.params.id;
          const todo = await Todo.findById({_id:id});

          if(!todo){
            return res.status(404).json({
                success:false,
                message:"You are trying to find out the data that was not present in the database"

            });
           }
            res.status(200).json({
                success:true,
                data:todo,
                message:"FOUND!!!!!!"

            })     
    }
    catch{
        console.error(err);
        res.status(500).json({
             success: false,
             error: err.message,
             message: "Server error",
      });

    }
}
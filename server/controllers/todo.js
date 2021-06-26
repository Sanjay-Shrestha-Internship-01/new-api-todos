import todos from '../models/todo.model.js';

export const getToDo = async (req, res) => {
    try {
        const todo = await todos.find();
        res.status(200).json(todo);
        console.log(todo);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const saveTodo = async (req, res) => {
    try {
      const todo = new todos({
        title: req.body.title,
        date: req.body.date,
       
      });
      const result = await todo.save();
      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  };

export const deleteToDo =  async (req, res) => {
    console.log("deltet bhayo")
        try {
          const todo = await todos.findByIdAndDelete(req.params.todo_id);
          return res.status(200).send(todo);
        } catch (error) {
          console.log(error);
        }
}
import Todos from "../models/todo.model.js";

export const getTodo = async (req, res) => {
  try {
    const todo = await Todos.find({
      _id: "",
    });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const saveTodo = async (req, res) => {
  try {
    const todo = new Todos({
      title: req.body.title,
      date: req.body.date,
    });
    const result = await todo.save();
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todos.findByIdAndDelete(req.params.todo_id);
    return res.status(200).send(todo);
  } catch (error) {
    console.log(error);
  }
};
export const updateTodo = async (req, res) => {
  try {
    const todo = await Todos.findByIdAndUpdate(req.params.todo_id, {
      title: req.body.title,
    });
    return res.status(200).send(todo);
  } catch (error) {
    console.log(error);
  }
};

import todos from "../models/todo.model";

export const getToDo = async (req, res) => {
    try {
        const todo = await todos.find();
        res.status(200).json(todo);
        console.log(todo);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const  saveTodo = async (req, res) => {
    const todo = req.body;
    const newTodo = new todos(todo);
    try {
        await newToDo.save();
        res.status(201).json(newTodo);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteToDo = async (req, res) => {
    const { todoid } = req.params;
    toDos.findByIdAndDelete(todoid, (err, todo) => {
        if (err) {
            res.status(500).json({
                err
            });
        } else {
            res.status(200).json({
                message: 'Todo was removed',
                toDo
            });
        }
    });
}
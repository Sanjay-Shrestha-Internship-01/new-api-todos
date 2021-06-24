const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  todos: {
    title: String,
    required: true,
    trim: true,
    maxlength: 100,
    minlength: 3,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("Todo", todoSchema);
exports.Todo = Todo
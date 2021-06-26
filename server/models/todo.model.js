  import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
    minlength: 3,
  },
  date: {
    type: Date,
    
  },
  // completed: {
  //   type: Boolean,
  //   default: false,
  // },
});

const Todos = mongoose.model("Todo", todoSchema);
export default Todos;
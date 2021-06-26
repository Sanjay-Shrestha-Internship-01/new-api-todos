import express from 'express';
import { saveTodo, deleteToDo, getToDo } from '../controllers/todo.js';
// import todos from '../models/todo.model';

const router = express.Router();

router.get('/', getToDo);
router.post('/', saveTodo);
router.delete('/:todo_id', deleteToDo);

 
export default router;
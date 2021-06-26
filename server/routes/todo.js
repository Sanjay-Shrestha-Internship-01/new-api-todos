import express from 'express';
import { saveToDo, deleteToDo, getToDo } from '../controllers/todo.js';
// import todos from '../models/todo.model';

const router = express.Router();

router.get('/', getToDo);
router.post('/', saveToDo);
router.delete('/:todoid', deleteToDo);

 
export default router;
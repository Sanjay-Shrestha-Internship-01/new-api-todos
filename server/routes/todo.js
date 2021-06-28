import express from "express";
import {
  updateTodo,
  saveTodo,
  deleteTodo,
  getTodo,
} from "../controllers/todo.js";
// import todos from '../models/todo.model';

const router = express.Router();

router.get("/", getTodo);
router.post("/", saveTodo);
router.delete("/:todo_id", deleteTodo);
router.patch("/:todo_id", updateTodo);

export default router;

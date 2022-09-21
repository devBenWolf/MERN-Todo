import express from "express"
const router = express.Router()

import {createTodo, deleteTodo, getAllTodos, updateTodo, showStats} from "../controllers/todoController.js"

router.route(`/`).post(createTodo).get(getAllTodos)
router.route(`/stats`).get(showStats)
router.route(`/:id`).delete(deleteTodo).patch(updateTodo)

export default router
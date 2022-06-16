import express from "express";
import { getAllTodo, addTodo, deleteTodo, getOneTodo, updateTodo } from "../controller/controller.js";

const router = express.Router();

router.route("/")
    .get(getAllTodo)
    .post(addTodo);

router.route("/:id")
    .get(getOneTodo)
    .put(updateTodo)
    .delete(deleteTodo);

export default router;
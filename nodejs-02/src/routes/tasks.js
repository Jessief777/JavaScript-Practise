const express = require("express");

const {
  getAllTasks,
  getTaskById,
  updateTaskById,
  addTask,
  deleteTaskById,
} = require("../controller/tasks");

const taskRouter = express.Router();

taskRouter.get("", getAllTasks);
taskRouter.get("/:id", getTaskById);
taskRouter.put("/:id", updateTaskById);
taskRouter.post("", addTask);
taskRouter.delete("/:id", deleteTaskById);

module.exports = taskRouter;

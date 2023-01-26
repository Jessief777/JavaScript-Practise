// list all routes (大路径/公共路径)
const express = require("express");
const taskRouter = require("./tasks");

const router = express.Router();

router.use("/tasks", taskRouter);

module.exports = router;

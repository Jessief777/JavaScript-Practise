/* 
1. Create an api server provide following endpoints
GET  /tasks      get all tasks (allow query params for filtering)
GET  /tasks/:id  get task by id
GET /tasks?description=xxx (filtering)
PUT  /tasks/:id  update task by id
POST /tasks      create a new task
DELETE  /tasks/:id  delete task by id

2. Add some headers in your server to solve the CORS issue
*/
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());

//
const tasks = [];
let id = 1;
// uuid, nanoid

app.use(cors);

app.get('/tasks', (req, res) => {
  res.json({});
});


function cors(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
}

// app.get("/tasks", (req, res) => {
//   res.status(200).json({ tasks });
// });

// app.get("/tasks/:id", (req, res) => {
//   res.status(200).json(req.params.id);
// });

// app.put("/tasks/:id", (req, res) => {
//   res.status(200).json(tasks);
// });

app.listen(3000, () => {
  console.log("server listening on port 3000");
});

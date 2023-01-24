/* 
1. Create an api server provide following endpoints
GET  /tasks      get all tasks (follow query params for filtering)
GET  /tasks/:id  get task by id
GET /tasks?description=xxx (filtering)
PUT  /tasks/:id  update task by id
POST /tasks      create a new task
DELETE  /tasks/:id  delete task by id

2. Add some headers in your server to solve the CORS issue
*/
const express = require("express");
const app = express();
app.use(express.json())

//let id = 1; // id++ =>2
// const tasks = {
//   "data":[
//     {
//       id: 1,
//       description: "mop the floor",
//       done: false,
//     },
//     { id: 2, 
//       description: "clean living room", 
//       done: false 
//     },
//     {
//       id:3,
//       description:"wash socks",
//       done:false
//     }
//   ]
// }

const tasks = [
      {
        id: 1,
        description: "mop the floor",
        done: false,
      },
      { id: 2, 
        description: "clean living room", 
        done: false 
      },
      {
        id:3,
        description:"wash socks",
        done:false
      }
  ]

console.log(tasks);
// 
app.get('/tasks',(req,res,next)=>{
  res.status(200).json(tasks)
  next()
})

app.get('/tasks/:id',(req,res,next)=>{
  res.status(200).json(tasks)
  next()
})

app.put('/tasks/:id',(req,res,next)=>{
  res.status(200).json(tasks)
  next()
})


app.listen(3000, () => {
  console.log("server listening on port 3000");
});

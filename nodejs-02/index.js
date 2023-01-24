const express = require("express");
const app = express();

// * middleware:
function m1(req, res, next) {
  if (2 > 1) {
    res.json({ error: "xxx" });
    return; // need to stop from here
  }
  console.log(1);
  next();
}
//=> error:'xxx'

function m2(req, res, next) {
  console.log(2);
  next();
}

app.use(m1); //global middleware
app.post("/v1/users/:id", m1, m2); //path middleware

// * root path *
// application, HTTP methods, ( path, callback function = route handler-middleware function)
// req = request
// res = response
app.get("/", (req, res) => {
  res.send("hello"); //自动转换成json对象
  // res.json({}) //一定要返回json，更具体
  // two way to response

  // res.sendStatus(200); //1.直接返回状态码
  // res.status(200).json({}) //2.返回状态码并返回数据，返回一个status状态
});

// * request *:
//1. body
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

//2. query param ->?key=value (case sensitive)
app.post("/", (req, res) => {
  res.json(req.query);
});

//3. route param /v1/users/:userId   -> GET, POST, PUT, DELETE
app.post("/v1/users/:userId", (req, res) => {
  res.json(req.params);
});

// 4. headers -> token

// * Asynchronous functions：when you want to wait until m1 finished, need to put next() into the function: *
function m3(req, res, next) {
  setTimeout(() => {
    // other logic
    next();
  }, 1000);
  // next() x
}

// app.post('/)
//app.put('/v1/news')

//error middleware need to be write at the last:
app.use((error, req, res, next) => {
  res.status(400).json(error);
});

// * 监听端口时会接收第二个参数：
app.listen(3000, () => {
  console.log("server listening on port 3000");
});

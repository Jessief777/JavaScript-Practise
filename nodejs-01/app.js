//3.
const Circle = require("./circle")
const circle = new Circle()

console.log(circle.area(5));
console.log(circle.circumference(3));

// 2. const { area,circumference } = require("./circle");

// console.log(area(5));
// console.log(circumference(3));

// 1. const http = require("http");
// const server = http.createServer((req,res) => {
//   res.write('hello node')
//   res.end()
// })

// server.listen(3000)


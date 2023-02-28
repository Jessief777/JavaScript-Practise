const { Router } = require("express");
const {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudentById,
  deleteStudentById,
  addStudentToCourse,
  removeStudentToCourse,
} = require("../controllers/students");
const { updateMany } = require("../models/student");

const studentRouter = Router();

//middleware
//处理错误的方法，是相当于在每一个route handler外面加了个try and catch，只要有错误，就通过调用next的方式，把错误传给error middleware，这样一来我们就只需要在error middleware那边handle 一些error就可以了，但是这里只处理常见错误（不单单局限于某一个route handler出现的错误，而是很多route handler 都会出现的错误，我们归纳在一起进行处理，这种时候我们会给这种处理创建error middleware），如果是一些具体的错误，我们会选择留在route handler进行处理。比如之前的404错误处理，可以放在error middleware
// function catchAllErrors(req,res,next){
//     try {
//       routeHandler(req,res,next)
//     } catch (error) {
//       //handle error
//       next(error)
//     }
// }

// currying function/high order function = high order component(React)
// function catchAllErrors(routeHandler) {
//   return async (req, res, next) => {
//     try {
//       await routeHandler(req, res, next);
//     } catch (error) {
//       //handle error
//       next(error);
//     }
//   };
// }

// studentRouter.get("", catchAllErrors(getAllStudents));
studentRouter.get("", getAllStudents);
studentRouter.get("/:id", getStudentById);
studentRouter.post("", addStudent);
studentRouter.put("/:id", updateStudentById);
studentRouter.delete(":/id", deleteStudentById);

studentRouter.post("/:studentId/courses/:courseId", addStudentToCourse);
studentRouter.delete("/:studentId/courses/:courseId", removeStudentToCourse);

module.exports = studentRouter;

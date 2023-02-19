// 命名：student.js, Student.js, Student.model.js, student.model.js 都可以，保持一致就行。

const { Schema, model } = require("mongoose");

const schema = new Schema({
  firstName: {
    type: String, // type:"string"
    // some basic validation:
    minLength: 2,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const StudentModel = model("Student", schema);

module.exports = StudentModel;

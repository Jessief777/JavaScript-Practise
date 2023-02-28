// 命名：student.js, Student.js, Student.model.js, student.model.js 都可以，保持一致就行。

const { Schema, model } = require("mongoose");
const Joi = require("joi");

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
    validate: [
      {
        validator: (email) => {
          //return false-> failed, true->success
          return !Joi.string().email().validate(email).error;
        },
        message: "Invalid email format",
      },
    ],
  },
  courses: [
    {
      type: String,
      ref: "Course",
    },
  ],
});

const StudentModel = model("Student", schema);

module.exports = StudentModel;

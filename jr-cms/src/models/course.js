const { Schema, model } = require("mongoose");

module.exports = model(
  "Course",
  new Schema({
    _id:{type:String,uppercase:true, alias:"code"},
    //alias 可以理解为一个id的别名叫做code，所以我们code的操作等同于对id在做。
    name: { type: String, required: true },
    //code: { type: String, required: true },
    description: { type: String, default: "this is a description" },
  })
);

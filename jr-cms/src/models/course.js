const { Schema, model } = require("mongoose");

module.exports = model(
  "Course",
  new Schema({
    _id: { type: String, uppercase: true, alias: "code" },
    //alias 可以理解为一个id的别名叫做code，所以我们code的操作等同于对id在做。
    name: { type: String, required: true },
    //code: { type: String, required: true },
    description: { type: String, default: "this is a description" },
    //一对一的关系——
    //student:{type: Schema.Types.ObjectId,ref:'Student'},

    // 一对多的关系——我们给Course加一个字段，这个字段专门用来维护course和students的关系：
    students: [
      {
        type: Schema.Types.ObjectId,
        // Mongoose 的Schema里的Types有一个ObjectID ，这样取出来的
        ref: "Student",
        // ref 的值要和models里的对应
      },
    ],
  })
);

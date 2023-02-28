const Joi = require("joi");

const baseSchema = {
  name: Joi.string().min(2).max(10).required(),
  code: Joi.string()
    .regex(/^[a-zA-Z]+[0-9]+ $/)
    .message("Invalid course code")
    .required(),
  description: Joi.string(),
};

const addCourseSchema = Joi.object({
  ...baseSchema,
});

module.exports = {
  addCourseSchema,
};

// 用这个方式可以创建多个schema在这个文件夹下

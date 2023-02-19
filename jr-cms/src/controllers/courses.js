const CourseModel = require("../models/course");

const addCourse = async (req, res) => {
  const { code, name, description } = req.body;
  const course = new CourseModel({ code, name, description });
  await course.save();
  res.status(201).json(course);
};
const getAllCourses = async (req, res) => {
  const courses = await CourseModel.find().exec();
  res.json(courses);
};
const getCourseById = async (req, res) => {
  const { id } = req.params;
  const course = await CourseModel.findById(id).exec();
  //请求成功，但找不到相应id的数据
  if (!course) {
    res.status(404).json({ error: "course not found" });
    return;
  }
  res.json(course);
};
const updateCourseById = async (req, res) => {
  const { id } = req.params;
  const { code, name, description } = req.body;
  const course = await CourseModel.findByIdAndUpdate(
    id,
    { code, name, description },
    { new: true }
  ).exec();
  if (!course) {
    res.status(404).json({ error: "course not found" });
    return;
  }
  res.json(course);
};

const deleteCourseById = async (req, res) => {
  const { id } = req.params;
  const course = await CourseModel.findByIdAndDelete(id).exec();
  if (!course) {
    res.status(404).json({ error: "course not found" });
    return;
  }
  res.senStatus(204);
};

module.exports = {
  addCourse,
  getAllCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
};

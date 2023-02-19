const StudentModel = require("../models/student");
const addStudent = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  //此时省略data validation

  //通过mongoose，把数据传给数据库
  const student = new StudentModel({ firstName, lastName, email });
  await student.save();
  //.save 会做我们设定的schema的数据验证；create是跳过了验证
  res.status(201).json(student);

  //方法2:
  //StudentModel.create({firstName, lastName, email})
};
const getAllStudents = async (req, res) => {
  //find -> Query
  //query.find -> Query, query.sort -> Query, query.filter -> Query
  // query.find().sort().filter() (query chain build up our query)通过函数调用的形式一点点build up 我们的query
  // 特殊-exec(),想要立即发送这个query,后面没有其他的了，不需要再build up了
  const students = await StudentModel.find().exec();
  // missing error handling, learn it later
  res.json(students);
};
const getStudentById = async (req, res) => {
  const { id } = req.params;
  const student = await StudentModel.findById(id).exec();
  //请求成功，但找不到相应id的数据
  if (!student) {
    res.status(404).json({ error: "student not found" });
    return;
  }
  res.json(student);
};
const updateStudentById = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;
  const student = await StudentModel.findByIdAndUpdate(
    id,
    { firstName, lastName, email },
    { new: true }
  ).exec();
  if (!student) {
    res.status(404).json({ error: "student not found" });
    return;
  }
  res.json(student);
};
//findByIdAndUpdate()接收三个参数：1.筛选条件； 2.要更新的value；3.代表说要把最新的数据返回出来。如果不写，会自动默认返回更新之前的document
const deleteStudentById = async(req, res) => {
  const {id} = req.params
  const student = await StudentModel.findByIdAndDelete(id).exec()
  if (!student) {
    res.status(404).json({ error: "student not found" });
    return;
  }
  res.senStatus(204);
  // 204状态码不会返回body
};

module.exports = {
  addStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
};

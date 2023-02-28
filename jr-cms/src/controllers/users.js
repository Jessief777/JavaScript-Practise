const UserModel = require("../models/user");

const register = async (req, res) => {
  const { username, password } = req.body;
  //validation(schema)

  //check duplication username
  // UserModel.findOne({username}).exec()

  const user = new UserModel({ username, password });
  await user.save();

  res.status(201).json({ username });
};

const login = async (req, res) => {};

//token - expire time,不能再到期前销毁，一直到到期
//1. jwt-token, 用来做用户的登录注册，前端发送请求验证成功后，后端返回一个token，这个过程中会把后端返回的token保存，在token有效期内是一直有效的登录状态；如果此时用户选择登出，实际上只是在前端把保存的token删掉了，但是这个token依然有效

// 2. refresh token-确保token一直有效

module.exports = {
  register,
  login,
};

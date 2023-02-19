const mongoose = require("mongoose");

// connect string动态、链接错误等，实际代码会更复杂
mongoose.connect("mongodb://localhost/jrCMS18");

//connect string动态:
const connectToDB = () => {
  const connectionString = process.env.CONNECTION_STRING;

  if (!connectionString) {
    console.error("connection string is undefined");

    process.exit(1);
    //人为控制退出当前进程，这个server的目的是做一个API server，但是如果他不能成功访问数据库，就没有用处，与其用户访问发现链接不到，不如刚启动server时就直接检测是否链接有问题，也可以及时修复错误。

    //正常退出
    //非正常退出
    //人为正常退出(0)
    //人为非正常退出(1)-正数
  }
  //异常处理-会用到事件监听：
  const db = mongoose.connection;
  db.on("error", (error) => {
    console.error(error);
    process.exit(2);
  });
  db.on("connected", () => {
    console.log("DB connected!");
  });
  // 一般就上面两种情况就行
  db.on("disconnected", () => {
    console.log("DB is disconnected!");
  });
  mongoose.set("strictQuery", true);
  // 实际项目中clg会被替换成winston
  return mongoose.connect(connectionString);
};

module.exports = { connectToDB };

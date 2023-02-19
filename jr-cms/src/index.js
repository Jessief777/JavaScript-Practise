require("dotenv").config();
const express = require("express");
const router = require("./routes");
const { connectToDB } = require("./utils/db");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use("/v1", router);

connectToDB();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

//也可以放在.then里确保先链接数据库成功，然后再监听端口：
// connectToDB().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
//   });
// });

const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: 라우팅 분리
// 메인 페이지, 404 페이지는 모든 페이지의 고정 사항이므로 app.js에 한 번에 정의
app.get("/", (req, res) => {
  res.render("index");
});

const userRouter = require("./routes/user"); // ./routes/user.js
app.use("/user", userRouter);

// TODO: 404 에러 처리
// app.get("*", (req, res) => {
//   res.render("404");
// });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/user`);
});

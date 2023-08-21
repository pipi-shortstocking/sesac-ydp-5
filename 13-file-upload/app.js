const express = require("express");
const app = express();
const PORT = 8000;

// multer 관련 설정 코드
const multer = require("multer");
const upload = multer({
  dest: "uploads/", // dest: 클라이언트가 업로드한 파일을 저장할 서버측 경로
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

// 1. single(): 하나의 파일을 업로드
// upload.single("userfile"): 클라이언트의 요청이 들어오면
// multer 설정(upload 변수)에 따라 파일을 업로드 한 후, req.file 객체 생성
// single() 인자는 input 태그의 name 속성과 일치시켜야 함
app.post("/upload", upload.single("userfile"), (req, res) => {
  // req.file: 파일 업로드 정보
  // req.body: 파일 외의 정보들
  console.log(req.file);
  console.log(req.body);
  res.send("파일 업로드 완료!");

  // {
  //     fieldname: 'userfile',
  //     originalname: 'apple1.png',
  //     encoding: '7bit',
  //     mimetype: 'image/png',
  //     destination: 'uploads/',
  //     filename: '7399f417e8d2f61ec9456409d570eacf',
  //     path: 'uploads/7399f417e8d2f61ec9456409d570eacf',
  //     size: 2515
  //   }
});

app.listen(PORT, () => {
  console.log(`Port ${PORT} is opening!`);
});

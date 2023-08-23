const express = require("express");
const app = express();
const PORT = 8000;

// TODO: multer 관련 설정
const multer = require("multer");
const path = require("path");
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      const id = req.body.id;
      done(null, id + Date.now() + ext);
    },
  }),
  limits: { fileSizeL: 5 * 1024 * 1024 },
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: static 미들웨어 설정
// 1. uploads/ 폴더 접근 가능하도록
// 2. static/ 폴더 접근 가능하도록
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/static", express.static(__dirname + "/static"));

// TODO: 라우터 정의
// 1. GET /: index.ejs render
// 2. POST /result: result.ejs render

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/result", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.render("result", { user: req.body, imgPath: req.file.path });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});

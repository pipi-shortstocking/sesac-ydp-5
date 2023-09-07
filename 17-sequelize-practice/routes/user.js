const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// 메인 화면
router.get("/", controller.main);

// 회원가입
router.get("/signup", controller.signup);

// 로그인
router.get("/signin", controller.signin);

module.exports = router;

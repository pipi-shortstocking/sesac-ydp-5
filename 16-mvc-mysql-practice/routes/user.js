// TODO: 라우트 설정
const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/signup", controller.signup); // 회원가입 페이지 보이기
router.post("/signup", controller.postSignup); // register

router.get("/signin", controller.signin); // 로그인 페이지 보이기
router.post("/signin", controller.postSignin); // login

router.post("/profile", controller.postProfile); // 회원 정보 페이지 보이기

module.exports = router;

const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// 메인 화면
router.get("/", controller.main);

// 회원가입 화면
router.get("/signup", controller.signup);
// 회원가입
router.post("/signup", controller.postSignup);

// 로그인 화면
router.get("/signin", controller.signin);
// 로그인
router.post("/signin", controller.postSignin);

// 회원 정보 화면
router.post("/profile", controller.postProfile);
// 회원 정보 편집
router.post("/profile/edit", controller.editProfile);
// 회원 정보 삭제
// router.post("/profile/delete", controller.deleteProfile);

module.exports = router;

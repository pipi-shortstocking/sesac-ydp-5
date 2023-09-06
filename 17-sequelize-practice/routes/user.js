const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// 메인 화면
router.get("/", controller.main);

module.exports = router;

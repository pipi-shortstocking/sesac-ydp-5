const { User } = require("../models");

exports.main = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.postSignup = async (req, res) => {
  const { userid, pw, name } = req.body;
  // console.log("회원가입 정보 확인 >> ", userid, pw, name);
  const result = await User.create({
    userid,
    name,
    pw,
  });

  res.send(result);
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.postSignin = async (req, res) => {
  const { userid, pw } = req.body;
  // console.log("로그인 정보 확인 >> ", userid, pw);
  const result = await User.findOne({
    where: { userid: userid, pw: pw },
  });
  // console.log(result);
  res.send(result);
};

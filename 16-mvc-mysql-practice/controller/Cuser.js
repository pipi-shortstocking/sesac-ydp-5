// TODO: 컨트롤러 코드
const User = require("../model/User");

// signup 보이기
exports.signup = (req, res) => {
  res.render("signup");
};

exports.postSignup = (req, res) => {
  User.postSignup(req.body, () => {
    console.log(req.body);
    res.end();
  });
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.postSignin = (req, res) => {
  User.postSignin(req.body, (result) => {
    console.log("result >> ", result); // User.js로부터 콜백인자가 제대로 전달되는지 확인

    if (result.length > 0) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

exports.postProfile = (req, res) => {
  res.render("profile");
};

exports.main = (req, res) => {
  res.render("index");
};

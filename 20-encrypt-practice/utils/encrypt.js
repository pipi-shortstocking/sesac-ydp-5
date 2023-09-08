const bcrypt = require("bcrypt");
const saltRounds = 10;

// 비밀번호 암호화 함수
const hasedPassword = (password) => bcrypt.hash(password, saltRounds);

// 원본 비밀번호와 해시된 비밀번호가 일치하는지 확인하는 함수
const comparePassword = (password, dbPassword) =>
  bcrypt.compare(password, dbPassword);

module.exports = {
  hasedPassword,
  comparePassword,
};

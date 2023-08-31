// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "sesac",
});

exports.postSignup = (data, callback) => {
  conn.query(
    `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}')`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log("users >> ", rows);
      callback();
    }
  );
};

exports.postSignin = (data, callback) => {
  conn.query(
    `SELECT * FROM user WHERE userid = '${data.userid}' and pw = '${data.pw}'`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log("login >> ", rows);
      callback(rows);
    }
  );
};

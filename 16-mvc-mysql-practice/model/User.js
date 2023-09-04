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
      console.log("login >> ", rows); // Cuers.js의 console.log("result >> ", result)와 동일한 결과 출력
      callback(rows);
    }
  );
};

exports.postProfile = (userid, callback) => {
  conn.query(
    `SELECT * FROM user WHERE userid = '${userid}' LIMIT 1`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log("profile >> ", rows);
      callback(rows);
    }
  );
};

exports.editProfile = (data, callback) => {
  conn.query(
    `UPDATE user SET userid = '${data.userid}', pw = '${data.pw}', name = '${data.name}' WHERE id = '${data.id}'`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      callback();
    }
  );
};

exports.deleteProfile = (id, callback) => {
  conn.query(`DELETE FROM user WHERE id = '${id}'`, (err, rows) => {
    if (err) {
      throw err;
    }
    callback();
  });
};

// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "홍길동", comment: "내가 왔다" },
//     { id: 2, name: "이찬혁", comment: "으라차차" },
//   ];
// };

const mysql = require("mysql");

// db 연결 설정
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "sesac",
});

exports.getVisitors = (callback) => {
  // [before]
  //   return [
  //     { id: 1, name: "홍길동", comment: "내가 왔다" },
  //     { id: 2, name: "이찬혁", comment: "으라차차" },
  //   ];

  // [after]
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("model >>", rows);
    callback(rows);
  });
};

exports.postVisitor = (data, callback) => {
  // 매개변수
  // data: 프론트에서 유저가 입력한 값 (rea.body)
  // callback: query 실행 후 호출할 함수

  conn.query(
    `insert into visitor values(null, '${data.name}', '${data.comment}')`, // 따옴표로 감싸지 않으면 숫자만 입력 가능
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log("model >>", rows);
      callback(rows.insertId);
    }
  );
};

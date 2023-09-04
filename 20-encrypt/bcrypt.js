// bcrypt
// : 비밀번호 암호화하는 알고리즘 중 하나
// : 주로 강력한 보안 필요할 때 사용
// : blowfish 암호를 기반으로 설계된 단방향 암호화 함수
// (보안 강화하기 위해 해쉬화 하는 것으로 원본 데이터를 복원하는 기능은 없음)

const bcrypt = require("bcrypt");

const originalPassword = "1234"; // 원본 비번
const saltRounds = 10; // 솔트 라운드 수를 정의 (숫자가 클수록 해시 생성이 오래 걸림(보안이 강함) -> 너무 클 경우, 성능에 영향을 줄 수 있음)

// 1. 비밀번호 해싱 함수
function hashPassword(password) {
  return bcrypt.hashSync(password, saltRounds); // 비동기처리 해줄 필요 X
}

// 2. 원본 비밀번호와 해시된 비밀번호가 일치하는지 확인하는 함수
function comparePassword(password, hasedPassword) {
  return bcrypt.compareSync(password, hasedPassword);
}

// 사용 예제
// 원본 비번을 해싱한 결과
const hasedPassword = hashPassword(originalPassword);
console.log(`Hashed password: ${hasedPassword}`);

// 원본 비번이랑 해시된 비번이 일치하는지 확인
const isMatch = comparePassword(originalPassword, hasedPassword); // 같다면 true, 다르면 false
console.log(`originalPassword === hasedPassword : ${isMatch}`); // true

const isMatch2 = comparePassword("hello world!", hasedPassword); // 같다면 true, 다르면 false
console.log(`originalPassword === hasedPassword : ${isMatch2}`); // false

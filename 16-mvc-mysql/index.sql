-- 데이터베이스 재생성
SHOW databases;
DROP database sesac;

-- 이모지, 특수 문자를 사용할 수 있는 인코딩
create database sesac character set utf8mb4 collate utf8mb4_unicode_ci;

USE sesac;
CREATE TABLE visitor (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);
DESC visitor;

INSERT INTO visitor VALUES (1, '홍길동', '내가 왔다.');
INSERT INTO visitor VALUES (2, '이찬혁', '으라차차');
INSERT INTO visitor VALUES (3, '이수현', '안뇽');
SELECT * FROM visitor;

-- user 라는 새로운 계정(mysql 접속 가능한 계정) 생성
CREATE USER 'user'@'%' IDENTIFIED WITH mysql_native_password by '비밀번호';
-- user 계정에 대해서 모든 권한 부여 = (DCL 중에서 grant)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
-- mysql 캐시 새로고침
FLUSH PRIVILEGES;

-- 비밀번호 변경
SET GLOBAL validate_password.policy=LOW;
SET GLOBAL validate_password.length = 4;
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '1234';

-- mysql 데이터베이스의 user 테이블에서 새로 생성된 "user" 계정 확인 가능
SHOW databases;
SELECT * FROM mysql.user;

create database sesac default character set utf8 collate utf8_general_ci;
use sesac;

create table member (
	id varchar(20) primary key,
    name varchar(5) not null,
    age int,
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2) default 'x'
);

alter table member modify id varchar(10);
alter table member drop column age;
alter table member add interest varchar(100);

desc member;

create table user (
	id varchar(10) primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender enum('F','M','') default '',
    birthday date not null,
    age int(3) not null default 0
);

desc user;

insert into user values
	('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33),
	('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31),
	('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53),
	('hanjo', 'jk48fn4', '한조', 'M', '1994-01-31', 33),
	('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47),
	('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22),
	('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);
    
select * from user;

SELECT * FROM user ORDER BY birthday;
SELECT * FROM user WHERE gender LIKE 'M' ORDER BY name DESC;
SELECT id, name FROM user WHERE birthday = 
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
SELECT id, name FROM user WHERE birthday LIKE '199%';
SELECT * FROM user WHERE birthday LIKE '____%06%' ORDER BY birthday;
SELECT * FROM user WHERE gender = 'M' and birthday LIKE '197%';
SELECT * FROM user ORDER BY age DESC LIMIT 3;
SELECT * FROM user WHERE age <= 50 and age >= 25;
UPDATE user SET pw = '12345678' WHERE id = 'hong1234';
DELETE FROM user WHERE id = 'jungkrat';


-- 선택 실습	
CREATE TABLE authors (
	author_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50)
);
CREATE TABLE books (
	book_id INT PRIMARY KEY,
    title VARCHAR(100),
    author_id INT, -- authors table에서 authoer_id 참조
    publication_date DATE,
    -- books 테이블의 author_id 컬럼은 authors 테이블의 author_id와 관계를 맺는다.
    FOREIGN KEY (author_id) REFERENCES authors(author_id) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE orders (
	order_id INT PRIMARY KEY,
    book_id INT, -- books table에서 book_id 참조
    customer_name VARCHAR(50),
    order_date DATE,
    -- orders 테이블의 book_id 컬럼은 books 테이블의 book_id와 관계를 맺는다.
    FOREIGN KEY (book_id) REFERENCES books(book_id) ON UPDATE CASCADE ON DELETE CASCADE
);

desc authors;
desc books;
desc orders;

INSERT INTO authors (author_id, first_name, last_name, email)
VALUES (1, 'J.K.', 'Rowling', 'jkrowling@gmail.com'),
       (2, 'George R.R.', 'Martin', 'grmartin@yahoo.com'),
       (3, 'Stephen', 'King', 'sking@hotmail.com');

INSERT INTO books (book_id, title, author_id, publication_date)
VALUES (1, 'Harry Potter and the Philosopher''s Stone', 1, '1997-06-26'),
       (2, 'A Game of Thrones', 2, '1996-08-06'),
       (3, 'The Shining', 3, '1977-01-28');

INSERT INTO orders (order_id, book_id, customer_name, order_date)
VALUES (1, 1, 'John Smith', '2022-02-15'),
       (2, 2, 'Jane Doe', '2022-02-16'),
       (3, 3, 'Bob Johnson', '2022-02-17');
       
SELECT * FROM authors;
SELECT * FROM books;
SELECT * FROM orders;

-- 1. author_id가 1인 작성자의 이메일을 jkrowling@yahoo.com으로 업데이트하는 SQL 문을 작성합니다.
UPDATE authors SET email = 'jkrowling@yahoo.com' WHERE author_id = 1;

-- 2. books 테이블에서 book_id 2인 책을 삭제하는 SQL 문을 작성합니다.
DELETE FROM books WHERE book_id = 2;

-- 3. 다음 세부 정보가 포함된 새 책을 삽입하는 SQL 문을 작성합니다.
-- 책 ID: 4
-- 제목: The Stand
-- 저자 ID: 3
-- 발행일자 : 1978-01-01
INSERT INTO books VALUES(4, 'The Stand', 3, '1978-01-01');

-- 4. book_id 1인 책의 출판 날짜를 1997-06-30으로 업데이트하는 SQL 문을 작성하십시오.
UPDATE books SET publication_date = '1997-06-30' WHERE book_id = 1;

-- 5. 2022-02-17 이전에 접수된 모든 주문을 삭제하는 SQL 문을 작성합니다.
SET SQL_SAFE_UPDATES = 0;
DELETE FROM orders WHERE order_date  < '2022-02-17';

-- 6. 다음 세부 정보와 함께 새 주문을 삽입하는 SQL 문을 작성합니다.
-- 주문 ID: 4
-- 책 ID: 1
-- 고객 이름: Sarah Johnson
-- 주문일자 : 2022-02-18
INSERT INTO orders VALUES (4, 1, 'Sarah Johnson', '2022-02-18');

-- 7. order_id가 1인 주문의 고객 이름을 Jack Smith로 업데이트하는 SQL 문을 작성합니다.
UPDATE orders SET customer_name = 'Jack Smith' WHERE order_id = 1;

-- 8. 다음 세부 정보와 함께 새 작성자를 삽입하는 SQL 문을 작성합니다.
-- 저자 ID: 4
-- 이름: agatha
-- 성: christie
-- 이메일: agatha.christie@example.com
INSERT INTO authors VALUES (4, 'agatha', 'christie', 'agatha.christie@example.com');

-- 9. author_id 2인 작성자의 성을 Martinez로 업데이트하는 SQL 문을 작성합니다.
UPDATE authors SET last_name = 'Martinez' WHERE author_id = 2;

-- 10. author_id 3인 저자가 쓴 모든 책을 삭제하는 SQL 문을 작성합니다.
DELETE FROM authors WHERE author_id = 3;
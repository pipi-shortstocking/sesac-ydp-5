-- JOIN 
SELECT * FROM customer;
SELECT * FROM orders;
SELECT * FROM customer, orders;

-- customer, order 테이블의 행 개수 구하기
SELECT COUNT(*) FROM customer; -- 9
SELECT COUNT(*) FROM orders; -- 19
SELECT COUNT(*) FROM customer, orders; -- 171 = 9 * 19
-- => cross join

-- where 절을 이용해 조인 조건 추가
-- 테이블이름.속성: 어느 테이블의 속성인지 가르킴
SELECT * FROM customer, orders
	WHERE customer.custid = orders.custid;
    
SELECT * FROM customer, orders
	WHERE customer.custid = orders.custid
    ORDER BY customer.custname;
    
SELECT * FROM customer INNER JOIN orders
	ON customer.custid = orders.custid;
    
-- "고객 이름"과 고객이 주문한 "상품명", "상품 가격" 조회
-- 고객 이름: customer
-- 상품명, 상품 가격: orders
SELECT custname, prodname, price FROM customer, orders
	WHERE customer.custid = orders.custid;
    
SELECT custname, prodname, price FROM customer INNER JOIN orders
	ON customer.custid = orders.custid;
    
-- 고객 이름별로 주문한 제품 총 구매액을 고객 별로 오름차순 정렬
SELECT custname, SUM(price * amount) AS 'total_price'
	FROM customer, orders
	WHERE customer.custid = orders.custid
    GROUP BY custname
    ORDER BY total_price DESC;
    
SELECT custname, SUM(price * amount) AS 'total_price'
	FROM customer INNER JOIN orders
	ON customer.custid = orders.custid
    GROUP BY custname
    ORDER BY total_price DESC;
    

 --exercise1
 SELECT * 
FROM item
ORDER BY price ASC;


SELECT * 
FROM item
WHERE price >= 80
ORDER BY price DESC;


SELECT first_name, last_name, email
FROM customer
ORDER BY first_name ASC
LIMIT 3;

SELECT last_name
FROM customer
ORDER BY last_name DESC;
--exercise2
select * from customer
select first_name || ' ' || last_name as full_name from customer
select create_date from customer
select * from customer order by first_name desc;
select film_id, title, description, release_year, rental_rate from film order by rental_rate asc;
select address , phone from address where district = 'Texas' ;
select * from film where film_id = 15 or film_id = 150 ;
-- question 8
select film_id , title , description, length , rental_rate from film where title = 'Driving Polish';
-- question 9
select film_id , title , description, length , rental_rate from film where title like 'Dr%';
-- question 10
select * from film order by rental_rate asc limit 10 ;
-- question 12 
select customer.first_name , customer.last_name, payment.amount ,payment.payment_date 
 from  customer
  join payment 
   on customer.customer_id = payment.customer_id 
    order by customer.customer_id asc ;

--question 13
select film_id , film.title 
from film LEFT JOIN inventory ON film.id = inventory.film_id
WHERE 
    inventory.movie_id IS NULL;
--question 14
SELECT 
    city.name AS city,
    country.name AS country
FROM 
    city
JOIN 
    country ON city.country_id = country.id;

--question14
SELECT 
    customer.id AS customer_id,
    customer.first_name,
    customer.last_name,
    payment.amount,
    payment.payment_date,
    payment.staff_id
FROM 
    customer
JOIN 
    payment ON customer.id = payment.customer_id
ORDER BY 
    payment.staff_id;
  
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












  
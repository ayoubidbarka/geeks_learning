-- Change the language of some films
UPDATE film
SET language_id = 2 -- e.g., Italian
WHERE film_id IN (1, 2, 3);
SELECT * FROM language;
SHOW CREATE TABLE customer;  -- For MySQL

-- OR

SELECT 
    table_name, 
    column_name, 
    constraint_name, 
    referenced_table_name, 
    referenced_column_name
FROM 
    information_schema.key_column_usage
WHERE 
    table_name = 'customer';
DROP TABLE customer_review;
SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;
SELECT f.title, f.replacement_cost
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.replacement_cost DESC
LIMIT 30;

SELECT DISTINCT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE a.first_name = 'Penelope' AND a.last_name = 'Monroe'
  AND f.description LIKE '%sumo%';
SELECT title
FROM film
WHERE length < 60 AND rating = 'R'
  AND description LIKE '%documentary%';
SELECT title
FROM film
WHERE length < 60 AND rating = 'R'
  AND description LIKE '%documentary%';
SELECT DISTINCT f.title
FROM payment p
JOIN rental r ON p.rental_id = r.rental_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN customer c ON p.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
  AND p.amount > 4.00
  AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';
SELECT DISTINCT f.title
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
  AND (f.title LIKE '%boat%' OR f.description LIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;

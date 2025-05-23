SELECT * FROM language;
SELECT 
    f.title, 
    f.description, 
    l.name AS language_name
FROM 
    film f
JOIN 
    language l ON f.language_id = l.language_id;

SELECT 
    f.title, 
    f.description, 
    l.name AS language_name
FROM 
    language l
LEFT JOIN 
    film f ON l.language_id = f.language_id;

CREATE TABLE new_film (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255)
);
INSERT INTO new_film (name) VALUES ('Inception'), ('The Matrix'), ('Interstellar');
CREATE TABLE customer_review (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    film_id INT,
    language_id INT,
    title VARCHAR(255),
    score INT CHECK (score >= 1 AND score <= 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
    FOREIGN KEY (language_id) REFERENCES language(language_id)
);
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES 
(1, 1, 'Great Sci-Fi!', 9, 'Inception was mind-blowing.'),
(2, 2, 'Classic!', 10, 'The Matrix is a must-watch.');
DELETE FROM new_film WHERE id = 1;
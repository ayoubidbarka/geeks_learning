CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt','Damon','08/10/1970', 5);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('George','Clooney','06/05/1961', 2);

INSERT INTO actors (first_name, last_name ,age , number_oscars ) 
VALUES 
 ('Meryl',  'Streep', '1949-06-22', 3),
 ('Scarlett' , 'Johansson', '1984-11-22' , 0)

INSERT INTO actors (first_name, last_name, age ,number_oscars)
VALUES 
  ('Leonardo', 'DiCaprio', '1974-11-11', 1),
  ('Natalie', 'Portman', '1981-06-09', 1),
  ('Denzel' , 'Washington', '1954-12-28', 2)
 
select * from actors;

select count(*) from actors ;

-- insert into actors(first_name, last_name, age)
-- values
--  ('   ','   ', '     ',)
-- ERROR:  erreur de syntaxe sur ou près de « ) »
-- LINE 31:  ('   ','   ', '     ',)
--                                 ^ 



create table items(
 item_id serial primary key not null ,
 item_name varchar(50) not null ,
 item_price smallint not null
)
insert into items(item_name , item_price) 
values
 ('Small Desk' , 100),
 ('large desk' , 300),
 ('fan' , 80)


create table customers(
 customer_id serial primary key not null,
 first_name varchar(50) ,
 last_name varchar(58)
)
insert into customers(first_name , last_name)
values 
 ('greg' ,'Jones'),
 ('sandra' ,'Jones'),
 ('Scott' ,'Scott'),
 ('trevor' ,'Green'),
 ('melanie' ,'Johnson')

select * from items
select item_price > 80 from items;
-- we select two price
select item_price <= 300 from items;
-- we select tree price
select last_name from customers where last_name = 'Smith';
-- we don't have that name

select last_name from customers where last_name = 'Jones';

select first_name from customers where first_name != 'scott';

show databases;
use Warehouse;
show tables;

desc cities;
insert into cities values (1,'Pune','Maharashtra'),(2,'Mumbai','Maharashtra'),(3,'Nagpur','Maharashtra'),(4,'Vapi','Gujarat'),(5,'Surat','Gujarat');
select * from cities;

desc warehouses;
insert into warehouses values (1,"Warehouse 1","Punawale",1,null),(2,"Warehouse 2","Katraj",1,null),(3,"Warehouse 3","Baner",1,null),
(4,"Warehouse 4","Colaba",2,null),(5,"Warehouse 5","Andheri",2,null),(6,"Warehouse 6","Borivali",2,null),
(7,"Warehouse 7","Civil Lines",3,null),(8,"Warehouse 8","Police Quarters",3,null),(9,"Warehouse 9","Railway Station",3,null),
(10,"Warehouse 10","Gunjan",4,null),(11,"Warehouse 11","Chala",4,null),(12,"Warehouse 12","Adajan",5,null);
select * from warehouses;

desc stores;
insert into stores values (1,1,"Store 1","Pune"),(2,1,"Store 2","Pune"),(3,1,"Store 3","Pune"),
(4,1,"Store 4","Pune"),(5,5,"Store 5","Mumbai"),(6,5,"Store 6","Mumbai"),
(7,6,"Store 7","Mumbai"),(8,6,"Store 8","Mumbai"),(9,4,"Store 9","Mumbai"),
(10,11,"Store 10","Vapi"),(11,11,"Store 11","Vapi"),(12,10,"Store 12","Vapi");
select * from stores;

desc customer;
insert into customer values (1,"Niraj","Punawale","Pune"),(2,"Suraj","Haria Park","Vapi"),(3,"Shivanya","Haria Park","Vapi"),(4,"Mr. Patil","Katraj","Pune");
select * from customer;

desc orders;
insert into orders values (1,"2022-08-03",1,4500,"Pay on Delivery"),(2,"2022-08-03",2,4500,"Pay on Delivery"),
(3,"2022-08-03",3,4500,"Pay on Delivery"),(4,"2022-08-03",4,4500,"Pay on Delivery"),
(5,"2022-07-03",4,4500,"UPI"),(6,"2022-06-03",4,4500,"UPI");
select * from orders;

desc items;
insert into items values (1,"Samsung S21",0.19,200.00),(2,"Samsung S22",0.25,100.00),(3,"Samsung TV",15.5,300.00),
(4,"Samsung Guru",0.05,50.00),(5,"Samsung Note",0.79,250.00),(6,"Samsung AC",14.19,450.00);
select * from items;

desc orderdetails;
insert into orderdetails values (1,1,10,2000.00),(1,2,20,2000.00),(1,5,2,500.00),
(2,3,10,3000.00),(2,2,10,1000.00),(2,5,2,500.00),
(3,2,20,2000.00),(3,4,40,2000.00),(3,5,2,500.00),
(4,6,10,4500.00),
(5,2,45,4500.00),
(6,1,10,2000.00),(6,2,20,2000.00),(6,5,2,500.00);
select * from orderdetails;

desc inventory;
insert into inventory values (1,1,10),(1,2,10),(1,3,10),(1,4,10),(1,5,10),(1,6,10),
(2,1,10),(2,2,10),(2,3,10),(2,4,10),(2,5,10),(2,6,10),
(3,1,10),(3,2,10),(3,3,10),(3,4,10),(3,5,10),(3,6,10),
(7,1,10),(7,2,10),(7,3,10),(7,4,10),(7,5,10),(7,6,10),
(9,1,10),(9,2,10),(9,3,10),(9,4,10),(9,5,10),(9,6,10),
(11,1,10),(11,2,10),(11,3,10),(11,4,10),(11,5,10),(11,6,10),
(12,1,10),(12,2,10),(12,3,10),(12,4,10),(12,5,10),(12,6,10);
select * from inventory;


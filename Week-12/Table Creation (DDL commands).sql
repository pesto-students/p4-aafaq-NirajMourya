create database Warehouse;
show databases;
use Warehouse;
show tables;

create table cities (
city_id int not null,
city char(20) not null,
state char(20) not null,
primary key(city_id)
);

create table warehouses(
wid int not null,
wname char(30) not null,
location char(20) not null,
city_id int not null,
`extra content` json,
primary key(wid),
foreign key(city_id) references cities(city_id)
);

create table stores(
sid int not null,
wid int not null,
store_name char(20) not null,
location_city char(20) not null,
primary key(sid),
foreign key(wid) references warehouses(wid)
);

create table customer(
cno int not null,
cname char(20) not null,
addr  varchar(50) not null,
cu_city char(20) not null,
primary key(cno)
);

create table orders(
ono int not null,
odate date,
cno int not null,
total_amount decimal(20,4),
payment_type char(20),
primary key(ono),
foreign key(cno) references customer(cno)
);

create table items(
itemno int not null,
`description` text,
weight decimal(5,2) not null,
cost decimal(5,2) not null,
primary key(itemno)
);

create table inventory(
sid int not null,
itemno int not null,
quantity int not null,
primary key(sid, itemno),
foreign key(sid) references stores(sid),
foreign key(itemno) references items(itemno)
);

create table orderdetails(
ono int not null,
itemno int not null,
ordered_quantity int not null,
sub_total decimal(20,4),
primary key(ono, itemno),
foreign key(ono) references orders(ono),
foreign key(itemno) references items(itemno)
);

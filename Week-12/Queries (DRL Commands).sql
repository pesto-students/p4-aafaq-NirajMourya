show databases;
use Warehouse;
show tables;

-- Find the item that has minimum weight.
select itemno,`description`,weight from items where weight = ( select min(weight) from items);

-- Find the different warehouses in “Pune”.
select w.wname from warehouses w inner join cities c on w.city_id = c.city_id where c.city = "Pune";

-- Find the details of items ordered by a customer “Mr. Patil”.
select * from  orderdetails od inner join orders o on od.ono = o.ono inner join items i on od.itemno = i.itemno 
where o.cno = (select cno from customer where cname = 'Mr. Patil');

-- Find a Warehouse which has maximum stores.
select x.wid,x.wname,max(x.storecount) from 
(select w.wname,s.wid,count(s.sid) as storecount from stores s inner join warehouses w  on w.wid = s.wid group by s.wid ) x; 

-- Find an item which is ordered for a minimum number of times.
select i.itemno,i.`description`,count(*) as OrderCount from orderdetails od inner join items i on od.itemno = i.itemno group by od.itemno having OrderCount = 
(select min(x.itemorderedcount) from (select count(*) as itemorderedcount from orderdetails group by itemno) x);


-- Find the detailed orders given by each customer
select c.cno,c.cname,o.ono,o.odate,od.itemno,i.`description`,od.ordered_quantity,od.sub_total,o.payment_type from  orderdetails od 
inner join orders o on od.ono = o.ono inner join items i on od.itemno = i.itemno inner join customer c  on c.cno = o.cno ;

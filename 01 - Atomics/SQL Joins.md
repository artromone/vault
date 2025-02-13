#prog #prog/db/sql 

> Объединяет row у двух таблиц по связи между ними

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```
```sql
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate  
FROM Orders  
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
```

- [[SQL INNER JOIN]]
- [[SQL LEFT JOIN]]
- [[SQL RIGHT JOIN]]
- [[SQL FULL OUTER JOIN]]

- [[SQL Self Join]]

![[SQL Joins-1725803402249.jpeg]]

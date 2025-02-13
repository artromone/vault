#prog

> Возвращает все rows где match левой и правой таблицы

`FULL OUTER JOIN` == `FULL JOIN`

![[SQL INNER JOIN-1725803795560.jpeg]]

```sql
SELECT column_name(s)
FROM table1
FULL OUTER JOIN table2
ON table1.column_name = table2.column_name_WHERE condition;
```
```sql
SELECT Customers.CustomerName, Orders.OrderID  
FROM Customers  
FULL OUTER JOIN Orders ON Customers.CustomerID=Orders.CustomerID  
ORDER BY Customers.CustomerName;
```
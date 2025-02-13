#prog_lang #prog_lang/sql 

> Возвращает все rows из левой таблицы и соответствующие столбцы правой таблицы

![[SQL LEFT JOIN-1726218254322.jpeg]]

```sql
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;
```
```sql
SELECT Customers.CustomerName, Orders.OrderID  
FROM Customers  
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID  
ORDER BY Customers.CustomerName;


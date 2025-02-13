#prog_lang #prog_lang/sql 

> Возвращает все rows из правой таблицы и соответствующие столбцы левой таблицы

![[SQL RIGHT JOIN-1726218298701.jpeg]]

```sql
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;
```
```sql
SELECT Orders.OrderID, Employees.LastName, Employees.FirstName  
FROM Orders  
RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID  
ORDER BY Orders.OrderID;
```
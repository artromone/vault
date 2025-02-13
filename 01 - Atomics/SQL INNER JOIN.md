#prog/db/sql 

> Возвращает rows, у которых значения есть с обоих сторон

Режим [[SQL Joins]] по умолчанию, `INNER JOIN` = `JOIN`

![[SQL INNER JOIN-1725803795560.jpeg]]

```sql
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;
```
```sql
SELECT ProductID, ProductName, CategoryName  
FROM Products  
INNER JOIN Categories ON Products.CategoryID = Categories.CategoryID;
```
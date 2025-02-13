#prog_lang #prog_lang/sql 

> Сделать сравнение между значением в одной column и множеством других значений. Возвращает bool. Возвращает `TRUE`, если **все** значения из подмножества соответствуют условию. Означает, что условие будет верно **для всех** из значений диапазона.

Используется с `SELECT`, `WHERE` и `HAVING`

```sql
SELECT ALL column_name(s) -- == SELECT DISTINCT
FROM table_name
WHERE condition;
```
```sql
SELECT column_name(s)
FROM table_name
WHERE column_name operator ALL  
  (SELECT column_name FROM table_name WHERE condition);
```
```sql
SELECT ProductName  
FROM Products  
WHERE ProductID = ALL  
  (SELECT ProductID  
  FROM OrderDetails  
  WHERE Quantity = 10);
```
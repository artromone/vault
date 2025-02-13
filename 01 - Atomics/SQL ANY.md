#prog_lang #prog_lang/sql 

> Сделать сравнение между значением в одной column и множеством других значений. Возвращает bool. Возвращает `TRUE`, если **любое** из подмножества значений соответствует условию. Означает, что условие будет верно **хотя бы для одного** из значений диапазона.

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name operator ANY  
  (SELECT column_name FROM table_name WHERE condition);
```
```sql
SELECT ProductName  
FROM Products  
WHERE ProductID = ANY  
  (SELECT ProductID  
  FROM OrderDetails  
  WHERE Quantity = 10);
```

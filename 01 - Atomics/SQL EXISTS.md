#prog #prog/db/sql 

> Проверка на существование row в выдаче

```sql
SELECT column_name(s)
FROM table_name
WHERE EXISTS
(SELECT column_name FROM table_name WHERE condition);
```
```sql
SELECT SupplierName  
FROM Suppliers  
WHERE EXISTS
(SELECT ProductName FROM Products WHERE Products.SupplierID = Suppliers.supplierID AND Price = 22);
```
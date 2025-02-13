#prog #prog/db/sql 

> Копирует значения из одной таблицы в другую. Требует, чтобы типы данных совпадали

```sql
INSERT INTO table2
SELECT * FROM table1  
WHERE condition;
```
```sql
INSERT INTO table2 (column1, column2, column3, ...)  
SELECT column1, column2, column3, ...  
FROM table1 
WHERE condition;
```

```sql
INSERT INTO Customers (CustomerName, City, Country)  
SELECT SupplierName, City, Country FROM Suppliers;
```
#prog #prog/db/sql 

> Обновить существующее поле в таблице

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```
```sql
UPDATE Customers  
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'  
WHERE CustomerID = 1; -- что логично, можно обновлять по id
```
Если несколько условий – через запятую

Если не прописать `WHERE`, будут обновлены все значения
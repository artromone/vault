#prog_lang #prog_lang/sql 

> Был добавлен в SQL, т.к. [[SQL WHERE]] не может работать с [[SQL Aggregate]]

```sql
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
HAVING condition
ORDER BY column_name(s);
```
```sql
SELECT COUNT(CustomerID), Country  
FROM Customers  
GROUP BY Country  
HAVING COUNT(CustomerID) > 5;
```

#prog/db/sql 

> `SELECT TOP` уточняет количество rows, которое надо вернуть. Полезно, когда возвращается большой массив данных и это ухудшает производительность

```sql
SELECT TOP 3 * FROM Customers;

SELECT * FROM Customers  
LIMIT 3;

SELECT TOP 3 * FROM Customers  
ORDER BY CustomerName DESC;
```

# MySQL

```sql
SELECT * FROM Customers  
LIMIT 3;
```

```sql
SELECT TOP 50 PERCENT * FROM Customers;
```

```sql
SELECT * FROM Customers  
WHERE Country='Germany'  
LIMIT 10 OFFSET 20;
```
# Oracle

```sql
SELECT * FROM Customers  
FETCH FIRST 3 ROWS ONLY;
```

```sql
SELECT * FROM Customers  
FETCH FIRST 50 PERCENT ROWS ONLY;
```

```sql
SELECT * FROM Customers  
WHERE Country='Germany'  
FETCH FIRST 3 ROWS ONLY;
```

Сначала `LIMIT`, потом `OFFSET`

#prog #prog/db/sql 

> Один из перечисленных. Короткая форма [[SQL OR]]

Можно использовать `NOT IN`

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1, value2, ...);`
```
```sql
SELECT * FROM Customers  
WHERE Country IN ('Germany', 'France', 'UK');
```

Пишется через запятую

Пример: вернуть всех, кто сделал заказ:
```sql
SELECT * FROM Customers  
WHERE CustomerID IN (SELECT CustomerID FROM Orders);
```


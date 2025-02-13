#prog/db/sql 

> Возвращает количество rows, соответствующих условию

```sql
SELECT COUNT(column_name)
FROM table_name
WHERE condition;
```
```sql
SELECT COUNT(*)  
FROM Products;
```

Если вот так уточнить column, то [[SQL NULL]] значения не будут учтены
```sql
SELECT COUNT(ProductName)  
FROM Products;
```

Убрать дубликаты
```sql
SELECT COUNT(DISTINCT Price)  
FROM Products;
```

Задать всевдоним возвращенной column
```sql
SELECT COUNT(*) AS [Number of records]  
FROM Products;
```

COUNT + GROUP BY
```sql
SELECT COUNT(*) AS [Number of records], CategoryID  
FROM Products  
GROUP BY CategoryID;
```

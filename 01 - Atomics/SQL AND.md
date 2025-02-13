#prog_lang #prog_lang/sql 

> Комбинация нескольких условий

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition1 AND condition2 AND condition3 ...;
```
```sql
SELECT *  
FROM Customers -- Все, начинающиеся с G и из Spain
WHERE Country = 'Spain' AND CustomerName LIKE 'G%';
```

При комбинации с [OR](SQL%20OR.md) можно использовать скобки
```sql
SELECT * FROM Customers  
WHERE Country = 'Spain' AND (CustomerName LIKE 'G%' OR CustomerName LIKE 'R%');
```

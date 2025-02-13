#prog_lang #prog_lang/sql 

> Комбинация нескольких условий

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2 OR condition3 ...;
```
```sql
SELECT *  
FROM Customers -- Или начинающиеся с G или из Spain
WHERE Country = 'Spain' OR CustomerName LIKE 'G%';
```

#prog_lang #prog_lang/sql 

> Проверка на диапазон: текст, числа, даты

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```
```sql
SELECT column_name(s)
FROM table_name
WHERE column_name BETWEEN value1 AND value2; -- ! через AND
```

Пример: в алфавитном порядке:
```sql
SELECT * FROM Products  
WHERE ProductName BETWEEN 'Carnarvon Tigers' AND 'Mozzarella di Giovanni'  
ORDER BY ProductName;
```

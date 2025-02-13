#prog_lang #prog_lang/sql 

> Отрицание

```sql
SELECT column1, column2, ...
FROM table_name
WHERE NOT condition;
```
```sql
SELECT * FROM Customers  
WHERE NOT Country = 'Spain';

SELECT * FROM Customers  
WHERE City NOT IN ('Paris', 'London');
```

> Если используются более сложные условия, чем `=`, то NOT ставится после `column`
#prog #prog/db/sql 

> Нужен для объединения [[SQL SELECT]] результатов

- Каждый `SELECT` с `UNION` должен иметь одинаковое число columns
- У columns должен быть одинаковый тип данных
- Колонки в каждом `SELECT` должны иметь одинаковый порядок

> По умолчанию удаляет дубликаты. Не удалять – `UNION ALL`

```sql
SELECT column_name(s) FROM table1
UNION  
SELECT column_name(s) FROM table2;
```
```sql
SELECT City FROM Customers  
UNION  
SELECT City FROM Suppliers  
ORDER BY City;
```

В обоих – `INTERSECT`

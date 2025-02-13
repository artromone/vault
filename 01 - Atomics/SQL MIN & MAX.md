#prog_lang #prog_lang/sql 

> Возвращают наибольшее и наименьшее значение для выбранной column

```sql
SELECT MAX(column_name)
FROM table_name
WHERE condition; 
```
```sql
SELECT MIN(Price)  
FROM Products;
```

Возвращенной column можно задать имя:
```sql
SELECT MIN(Price) AS SmallestPrice  
FROM Products;
```

Использование совместно с Group By #q
```sql
SELECT MIN(Price) AS SmallestPrice, CategoryID  
FROM Products  
GROUP BY CategoryID;
```
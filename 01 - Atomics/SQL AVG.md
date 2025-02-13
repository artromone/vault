#prog #prog/db/sql 

> Среднее значение числового значения

```sql
SELECT AVG(column_name)
FROM table_name
WHERE condition;
```
```sql
SELECT AVG(Price)  
FROM Products;
```

Пример – значение выше среднего
```sql
SELECT * FROM Products  
WHERE price > (SELECT AVG(price) FROM Products);
```

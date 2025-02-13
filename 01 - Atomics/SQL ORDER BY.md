#prog_lang #prog_lang/sql 

> Отсортировать данные

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC; -- по умолчанию ASC
```
```sql
SELECT * FROM Products  
ORDER BY Price;
```

Пример `DESC` – по убыванию

```sql
SELECT * FROM Products  
ORDER BY Price DESC;
```

Пример с несколькими columns

```sql
SELECT * FROM Customers  
ORDER BY Country, CustomerName; -- через запятую
```
Сначала сортируется по `Country`, если какие-то одинаковые, то по `CustomerName`
```sql
SELECT * FROM Customers  
ORDER BY Country ASC, CustomerName DESC;
```

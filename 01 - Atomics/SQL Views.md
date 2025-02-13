#prog/db/sql 

> View – виртуальная таблица. Содержит rows и columns, как и обычная таблица. Поля в ней – данные из одной или нескольких таблиц. Можно добавлять данные в view и получать отображения данных из него, будто это одна самодостаточная таблица.

```sql
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```
```sql
CREATE VIEW [Brazil Customers] AS  
SELECT CustomerName, ContactName  
FROM Customers  
WHERE Country = 'Brazil';
```

Обновить значение:
```sql
CREATE OR REPLACE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

Удалить:
```sql
DROP VIEW view_name;
```

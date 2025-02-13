#prog #prog/db/sql 

> Возвращает только отличающиеся значения

Внутри таблицы в колонке могут быть повторяющиеся значения, команда полезна, когда нужно вывести только отличающиеся

```sql
SELECT DISTINCT column1, column2, ... // такое же, как SELECT
FROM table_name;
```
```sql
SELECT DISTINCT Country FROM Customers;
```

Используя `Count Distinct` считаем количество таких полей:

```sql
SELECT COUNT(DISTINCT Country) FROM Customers;
```

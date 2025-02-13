#prog_lang #prog_lang/sql 

> Обычный Join, но таблица присоединяется сама к себе. Создает виртуальную копию таблицы и устанавливает между ней и оригинальной связь.

#q

`FULL OUTER JOIN` == `FULL JOIN`

![[SQL INNER JOIN-1725803795560.jpeg]]

```sql
SELECT column_name(s)
FROM table1 T1, table1 T2
WHERE condition;
```
```sql
SELECT ...
FROM table_1 AS t1
JOIN table_1 AS t2
ON ...;


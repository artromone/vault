#prog_lang #prog_lang/sql #prog_lang/sql/db

> С помощью него можно добавить, удалить, изменить columns в существующей таблице
> Также используется для добавления и удаления различных ограничений в сущестующей таблице

```sql
ALTER TABLE table_name
ADD column_name datatype;

ALTER TABLE table_name
DROP COLUMN column_name;

ALTER TABLE table_name
RENAME COLUMN old_name to new_name; -- MODIFY в mySQL

ALTER TABLE table_name
ALTER COLUMN column_name datatype;
```

```sql
ALTER TABLE Customers  
ADD Email varchar(255);

ALTER TABLE Customers  
DROP COLUMN Email;
```

Создать таблицу из другой таблицы (будет заполнена существующими данными из другой)

```sql
CREATE TABLE new_table_name AS  
    SELECT column1, column2, ...  
    FROM existing_table_name
    WHERE ...;
```
```sql
CREATE TABLE TestTable AS  
SELECT customername, contactname  
FROM customers;
```

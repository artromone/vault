#prog_lang #prog_lang/sql #prog_lang/sql/db

> Создать новую таблицу в БД

```sql
CREATE TABLE table_name (  
    column1 datatype, -- сначала имя, потом тип данных
    column2 datatype,
    column3 datatype,
    ...
);
```
```sql
CREATE TABLE Persons (  
    PersonID int,  
    LastName varchar(255), -- максимум 255 символов 
    FirstName varchar(255),  
    Address varchar(255),  
    City varchar(255)  
);
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

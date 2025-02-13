#prog_lang #prog_lang/sql #prog_lang/sql/db

> Создает индексы в таблице

Отдельная структура, которая хранит в себе карту доступа к элементам
При перестройке индексы будут меняться, дорого их хранить

*Indexes are used to retrieve data from the database more quickly than otherwise. The users cannot see the indexes, they are just used to speed up searches/queries.*

*Updating a table with indexes takes more time than updating a table without (because the indexes also need an update). So, only create indexes on columns that will be frequently searched against.*

```sql
CREATE INDEX index_name -- может быть UNIQUE
ON table_name (column1, column2, ...);
```

```sql
CREATE INDEX idx_lastname  
ON Persons (LastName);

CREATE INDEX idx_pname  
ON Persons (LastName, FirstName);
```

Удалить:
```sql
DROP INDEX index_name ON table_name;
```

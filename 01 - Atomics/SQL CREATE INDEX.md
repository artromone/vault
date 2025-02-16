#prog/db/sql #prog/db/sql

> Создает [[Индексы]] в таблице

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

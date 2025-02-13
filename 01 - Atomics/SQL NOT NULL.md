#prog_lang #prog_lang/sql #prog_lang/sql/db

> Нельзя добавить или сменить row, не установив значение в эту column

```sql
CREATE TABLE Persons (  
    ID int NOT NULL,  
    LastName varchar(255) NOT NULL,  
    FirstName varchar(255) NOT NULL,  
    Age int  
);
```

```sql
ALTER TABLE Persons  
ALTER COLUMN Age int NOT NULL;
```
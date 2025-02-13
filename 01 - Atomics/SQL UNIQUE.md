#prog #prog/db/sql #prog/db/sql

> Все значения в column должны быть разными. [[SQL PRIMARY KEY]] обладает этим свойством по умолчанию.
> Может быть только один [[SQL PRIMARY KEY]] но сколько угодно `UNIQUE`

```sql
CREATE TABLE Persons (  
    ID int NOT NULL UNIQUE,  
    LastName varchar(255) NOT NULL,  
    FirstName varchar(255),  
    Age int  
);
```

```sql
ALTER TABLE Persons  
ADD UNIQUE (ID);
```

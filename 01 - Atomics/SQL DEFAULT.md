#prog_lang #prog_lang/sql #prog_lang/sql/db

> Если значение не указано, будет выбрано дефолтное это

```sql
CREATE TABLE Persons (  
    ID int NOT NULL,  
    LastName varchar(255) NOT NULL,  
    FirstName varchar(255),  
    Age int,  
    City varchar(255) DEFAULT 'Sandnes'  
);

CREATE TABLE Orders (  
    ID int NOT NULL,  
    OrderNumber int NOT NULL,  
    OrderDate date DEFAULT GETDATE()  
);
```

```sql
ALTER TABLE Persons  
ALTER City SET DEFAULT 'Sandnes';
```

Удалить:
```sql
ALTER TABLE Persons  
ALTER City DROP DEFAULT;
```

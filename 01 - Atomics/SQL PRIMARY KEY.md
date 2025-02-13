#prog_lang #prog_lang/sql #prog_lang/sql/db

> Должен содержать уникальные значения и не быть `NULL`
> В таблице он должен быть один. Может состоять из одного или нескольих column

```sql
CREATE TABLE Persons (  
    ID int NOT NULL,  
    LastName varchar(255) NOT NULL,  
    FirstName varchar(255),  
    Age int,  
    PRIMARY KEY (ID)  
);

CREATE TABLE Persons (  
    ID int NOT NULL,  
    LastName varchar(255) NOT NULL,  
    FirstName varchar(255),  
    Age int,  
    CONSTRAINT PK_Person PRIMARY KEY (ID,LastName)  
);
```
#q 

```sql
ALTER TABLE Persons  
ADD PRIMARY KEY (ID);

ALTER TABLE Persons  
ADD CONSTRAINT PK_Person PRIMARY KEY (ID,LastName);
```

Данное требование можно убрать:
```sql
ALTER TABLE Persons  
DROP PRIMARY KEY;
```

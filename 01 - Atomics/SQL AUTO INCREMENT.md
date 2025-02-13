#prog_lang #prog_lang/sql #prog_lang/sql/db

> Позволяет уникальному числу генерироваться автоматически когда добавляется новый row
> Часто это [[SQL PRIMARY KEY]], который мы хотим автоматически создавать

По умолчанию начальное значение **1**
`ALTER TABLE Persons AUTO_INCREMENT=100;` → так можно установить другое значение

```sql
CREATE TABLE Persons (  
    Personid int NOT NULL AUTO_INCREMENT,
    LastName varchar(255) NOT NULL,  
    FirstName varchar(255),  
    Age int,  
    PRIMARY KEY (Personid)  
);
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

#prog/db/sql #prog/db/sql

> Устанавливает условие, и только такие значения смогут быть добавлены/изменены
> Если условие не выполняется, операция вставки или обновления завершается с ошибкой

*The table with the foreign key is called the child table, and the table with the primary key is called the referenced or parent table.*

```sql
CREATE TABLE Persons (  
    ID int NOT NULL,  
    LastName varchar(255) NOT NULL,  
    FirstName varchar(255),  
    Age int,  
    CHECK (Age>=18)  
);

CREATE TABLE Persons (  
    ID int NOT NULL,  
    LastName varchar(255) NOT NULL,  
    FirstName varchar(255),  
    Age int,  
    City varchar(255),  
    CONSTRAINT CHK_Person CHECK (Age>=18 AND City='Sandnes')  
);
```

```sql
ALTER TABLE Persons  
ADD CHECK (Age>=18);

ALTER TABLE Persons  
ADD CONSTRAINT CHK_PersonAge CHECK (Age>=18 AND City='Sandnes');
```

Удалить:
```sql
ALTER TABLE Persons  
DROP CONSTRAINT CHK_PersonAge;
```

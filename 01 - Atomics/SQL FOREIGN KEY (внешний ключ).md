#prog #prog/db/sql #prog/db

> Запрещает разрыв связи между таблицами
> `FOREIGN` – поле в одной таблице, которое относится к [[SQL PRIMARY KEY (первичный ключ)]] в другой таблице

*The table with the foreign key is called the child table, and the table with the primary key is called the referenced or parent table.*

```sql
CREATE TABLE Orders (  
    OrderID int NOT NULL,  
    OrderNumber int NOT NULL,  
    PersonID int,  
    PRIMARY KEY (OrderID),  
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)  
);

CREATE TABLE Orders (  
    OrderID int NOT NULL,  
    OrderNumber int NOT NULL,  
    PersonID int,  
    PRIMARY KEY (OrderID),  
    CONSTRAINT FK_PersonOrder FOREIGN KEY (PersonID)  
    REFERENCES Persons(PersonID)  
);
```

```sql
ALTER TABLE Orders  
ADD FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);

ALTER TABLE Orders  
ADD CONSTRAINT FK_PersonOrder  
FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);
```

Удалить:
```sql
ALTER TABLE Orders  
DROP FOREIGN KEY FK_PersonOrder;
```

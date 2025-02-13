#prog_lang #prog_lang/sql

> Можно сохранить SQL код, и потом его переиспользовать. В нее можно передавать параметры.

```sql
CREATE PROCEDURE procedure_name 
AS  
sql_statement
GO;

EXEC procedure_name;
```

Пример с одним параметром
```sql
CREATE PROCEDURE SelectAllCustomers @City nvarchar(30)  
AS  
SELECT * FROM Customers WHERE City = @City  
GO;

EXEC SelectAllCustomers @City = 'London';
```

Пример с несколькими параметрами
```sql
CREATE PROCEDURE SelectAllCustomers @City nvarchar(30), @PostalCode nvarchar(10)  
AS  
SELECT * FROM Customers WHERE City = @City AND PostalCode = @PostalCode  
GO;

EXEC SelectAllCustomers @City = 'London', @PostalCode = 'WA1 1DP';
```

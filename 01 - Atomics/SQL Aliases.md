#prog #prog/db/sql 

> Нужен для задания псевдонима, он будет доступен внутри одного запроса

Слово `AS` можно опустить

```sql
SELECT column_name
AS alias_name
FROM table_name;
```
```sql
SELECT CustomerID AS ID  
FROM Customers;
```

Если пробел нужен, то можно использовать два типа кавычек:
```sql
SELECT ProductName AS [My Great Products]
SELECT ProductName AS "My Great Products"
```

Конкатенация:
```sql
SELECT CustomerName, Address + ', ' + PostalCode + ' ' + City + ', ' + Country AS Address  
FROM Customers;
```

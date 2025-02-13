#prog_lang #prog_lang/sql 

> Посчитать сумму числовой column 

```sql
SELECT SUM(column_name)
FROM table_name
WHERE condition;
```
```sql
SELECT SUM(Quantity)  
FROM OrderDetails;
```

Дать итоговой column имя –
```sql
SELECT SUM(Quantity) AS total  
FROM OrderDetails;
```

C групбай #q 

```sql
SELECT OrderID, SUM(Quantity) AS [Total Quantity]  
FROM OrderDetails  
GROUP BY OrderID;
```

Выполнить операцию:
```sql
SELECT SUM(Quantity * 10)  
FROM OrderDetails;
```

С join
```sql
SELECT SUM(Price * Quantity)  
FROM OrderDetails  
LEFT JOIN Products ON OrderDetails.ProductID = Products.ProductID;
```

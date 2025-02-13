#prog_lang #prog_lang/sql 

> Останавливается на первом удовлетворяющем условие варианте и его возвращает. Если таких нет, возвращает `ELSE`

Если нет `ELSE`, вернет `NULL`

```sql
CASE  
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    WHEN conditionN THEN resultN
    ELSE result
END;
```
```sql
SELECT OrderID, Quantity,  
CASE  
    WHEN Quantity > 30 THEN 'The quantity is greater than 30'  
    WHEN Quantity = 30 THEN 'The quantity is 30'  
    ELSE 'The quantity is under 30'  
END AS QuantityText  
FROM OrderDetails;
```

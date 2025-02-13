#prog #prog/db/sql 

> Проверка на соответствие определенному паттерну: [[SQL Wildcards]]

Можно использовать `NOT LIKE`

-  `%` – 0, 1 или несколько символов
```sql
SELECT * FROM Customers  
WHERE city LIKE '%L%';
```
-  `_` – один символ
```sql
SELECT * FROM Customers  
WHERE city LIKE 'L_nd__';
```

Примеры
```sql
SELECT * FROM Customers  
WHERE CustomerName LIKE 'a__%'; -- минимум 3 симола длиной
```
```sql
SELECT * FROM Customers  
WHERE Country LIKE 'Spain'; -- четкое соответствие
```

#prog/db/sql #prog #prog/db 

```
SUBSTRING(string, start, length)
```
```sql
SUBSTRING(email, 1, POSITION('@' IN email) - 1) AS address
SUBSTRING(email, POSITION('@' IN email) + 1) AS domain
```
- от начала до символа перед `@`
- от символа после `@` до конца

Также есть LEFT и RIGHT
```sql
SELECT RIGHT(CustomerName, 5) AS ExtractString  
FROM Customers;
```
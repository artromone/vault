#prog #prog/db/sql #prog/db/sql

> В sql server создает бэкап БД

```sql
BACKUP DATABASE databasename
TO DISK = 'filepath'  
WITH DIFFERENTIAL; -- только изменения
```

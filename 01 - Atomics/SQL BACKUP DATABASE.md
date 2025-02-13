#prog_lang #prog_lang/sql #prog_lang/sql/db

> В sql server создает бэкап БД

```sql
BACKUP DATABASE databasename
TO DISK = 'filepath'  
WITH DIFFERENTIAL; -- только изменения
```

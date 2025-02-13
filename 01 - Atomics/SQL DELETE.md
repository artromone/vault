#prog_lang #prog_lang/sql 

> Удалить данные в таблице

```sql
DELETE FROM table_name WHERE condition;
```
```sql
DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';
-- что логично, можно удалять по id
```
Если несколько условий – через запятую

Если не прописать `WHERE`, будут удалены все значения

Удалить таблицу:
- `DELETE FROM _table_name_;
- `DROP TABLE Customers;`

Удалить столбец:
- `DELETE FROM Customers;`

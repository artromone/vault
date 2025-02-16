#prog #prog/db #prog/db/sql 

- Когда выполняется запрос `SELECT FOR UPDATE`, СУБД блокирует выбранные строки (или диапазоны строк) для других транзакций, которые пытаются изменить или заблокировать эти же строки
- Блокировка сохраняется до конца текущей транзакции (до `COMMIT` или `ROLLBACK`)
- Другие транзакции, пытающиеся выполнить `SELECT FOR UPDATE`, `UPDATE` или `DELETE` на этих строках, будут ждать, пока блокировка не будет снята

```sql
SELECT * 
FROM table_name 
WHERE condition 
FOR UPDATE;
```

##### Варианты
- `FOR UPDATE NOWAIT`
Если строки уже заблокированы другой транзакцией, запрос не будет ждать и сразу вернёт ошибку
```sql
SELECT * 
FROM accounts 
WHERE id = 1 
FOR UPDATE NOWAIT;
```

- `FOR UPDATE SKIP LOCKED`
Пропускает заблокированные строки и возвращает только те, которые доступны для блокировки
```sql
SELECT * 
FROM accounts 
WHERE balance > 1000 
FOR UPDATE SKIP LOCKED;
```

- **Блокировка с указанием столбцов**
В некоторых СУБД (например, PostgreSQL) можно указать, какие столбцы блокировать
```sql
SELECT balance 
FROM accounts 
WHERE id = 1 
FOR UPDATE OF balance;
```
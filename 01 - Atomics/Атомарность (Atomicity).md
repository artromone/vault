#prog #prog/db 

> Транзакция выполняется целиком или не выполняется вообще

**Пример:** Перевод денег между счетами
Если списание прошло, а зачисление — нет, транзакция откатывается

```go
tx, err := db.Begin()
if err != nil {
    log.Fatal(err)
}

// Списание со счета A
_, err = tx.Exec("UPDATE accounts SET balance = balance - 100 WHERE id = 1")
if err != nil {
    tx.Rollback() // Откат при ошибке
    log.Fatal(err)
}

// Зачисление на счет B
_, err = tx.Exec("UPDATE accounts SET balance = balance + 100 WHERE id = 2")
if err != nil {
    tx.Rollback()
    log.Fatal(err)
}

err = tx.Commit() // Фиксация изменений
if err != nil {
    log.Fatal(err)
}
```
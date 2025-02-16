#prog #prog/db 

>  Транзакция переводит БД из одного валидного состояния в другое, соблюдая правила (ограничения, индексы, триггеры)

**Пример:** Проверка на положительный баланс
Если после транзакции баланс уходит в минус — она откатывается

- Используйте CHECK-ограничения в схеме БД: [[SQL CHECK]]
- Добавляйте бизнес-логику перед выполнением транзакции:
```go
func transferMoney(senderID, receiverID int, amount float64) error {
    var balance float64
    err := db.QueryRow("SELECT balance FROM accounts WHERE id = $1", senderID).Scan(&balance)
    if err != nil {
        return err
    }
    if balance < amount {
        return errors.New("insufficient funds")
    }
    // ... выполнение транзакции
}
```

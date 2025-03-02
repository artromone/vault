#prog #prog/db 

> Параллельные транзакции не влияют друг на друга. Уровни изоляции регулируют компромисс между производительностью и надежностью

[[Уровни изоляции транзакций]]

**Проблемы при слабой изоляции:**
- **Грязное чтение:** Чтение незафиксированных данных
- **Неповторяемое чтение:** Данные изменены другой транзакцией после первого чтения
- **Фантомы:** Появление новых строк после повторного запроса

```go
tx, err := db.BeginTx(ctx, &sql.TxOptions{
    Isolation: sql.LevelSerializable,
})
```

**Советы:**
- Используйте `LevelReadCommitted` для баланса между производительностью и надежностью
- Для финансовых операций — `LevelSerializable`, но будьте готовы обрабатывать ошибки `deadlock`
- В Go используйте retry-механизмы при deadlock:
```go
maxRetries := 3
for i := 0; i < maxRetries; i++ {
    err = performTransaction()
    if err == nil {
        break
    }
    if isDeadlockError(err) {
        time.Sleep(time.Duration(i) * 100 * time.Millisecond)
        continue
    }
    break
}
```
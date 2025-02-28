#prog/golang #prog #prog/concurrency 

```go
done := make(chan bool)
go func() {
    for {
        select {
        case <-done:
            return // Завершение при сигнале
        default:
            // Работа...
        }
    }
}()
// Остановка
done <- true
```

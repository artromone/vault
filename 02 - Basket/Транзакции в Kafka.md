> Атомарная запись сообщений в несколько партиций/топиков. Если транзакция откатывается, все изменения отменяются

**Как использовать**:
- Продюсер отправляет сообщения в рамках транзакции
- Консьюмер читает только закоммиченные сообщения

**Плюсы**:
- Гарантирует exactly-once в распределенных системах
**Минусы**:
- Сложнее в настройке
- Снижает производительность

**Пример (Go с sarama)**:
```go
config := sarama.NewConfig()
config.Producer.Idempotent = true
config.Producer.RequiredAcks = sarama.WaitForAll
config.Net.MaxOpenRequests = 1
producer, _ := sarama.NewSyncProducer([]string{"localhost:9092"}, config)

txnManager := sarama.NewTransactionManager()
txnManager.Begin()

// Отправка сообщения в транзакции
producer.SendMessage(&sarama.ProducerMessage{
    Topic: "orders",
    Value: sarama.StringEncoder("order-123"),
})

// Коммит транзакции (сообщение и оффсет сохранятся атомарно)
txnManager.Commit()
```
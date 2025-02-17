> Сообщение доставляется ровно один раз без потерь и дублей

- Идемпотентный продюсер гарантирует, что повторные отправки не создадут дубли (включите `enable.idempotence=true`)
- Транзакции: Для атомарной записи в несколько партиций/топиков.

```go
config := sarama.NewConfig()
config.Producer.Idempotent = true                // Идемпотентность
config.Producer.RequiredAcks = sarama.WaitForAll
config.Net.MaxOpenRequests = 1                   // Обязательно для идемпотентности
producer, _ := sarama.NewSyncProducer([]string{"localhost:9092"}, config)
```

#prog #prog/msg_broker #prog/msg_broker/kafka 

> Гарантирует, что даже при повторной отправке сообщения (из-за ретраев) оно не будет записано в топик несколько раз

**Как работает**:
- Каждое сообщение имеет уникальный идентификатор (PID + Sequence Number)
- Брокер Kafka отслеживает последовательности и отбрасывает дубликаты

**Плюсы**:
- Не требует изменений в коде консьюмера
- Минимальные накладные расходы
**Минусы**:
- Работает только в рамках одного продюсера и сессии

**Пример настройки в Go (sarama)**:
```go
config := sarama.NewConfig()
config.Producer.Idempotent = true                   // Включение идемпотентности
config.Producer.RequiredAcks = sarama.WaitForAll    // acks=all
config.Net.MaxOpenRequests = 1                      // Обязательно для идемпотентности
producer, _ := sarama.NewSyncProducer([]string{"localhost:9092"}, config)
```
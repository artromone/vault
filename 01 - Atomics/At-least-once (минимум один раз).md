#KAFKA 

> Сообщение гарантированно доставляется, но возможны дубли

Продюсер ждет подтверждения от всех реплик (`acks=all`) и повторяет отправку при ошибках (`retries > 0`).

**Риск дублей**: Если продюсер получил ошибку (например, таймаут), но сообщение уже было записано в Kafka, повторная отправка создаст дубль.

```go
config := sarama.NewConfig()
config.Producer.RequiredAcks = sarama.WaitForAll // acks=all
config.Producer.Retry.Max = 5                    // 5 попыток
producer, _ := sarama.NewSyncProducer([]string{"localhost:9092"}, config)
```

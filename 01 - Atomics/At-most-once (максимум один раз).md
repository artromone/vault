#KAFKA 

> Сообщение может быть потеряно, но никогда не доставится повторно

Продюсер отправляет сообщение и не ждет подтверждения (`acks=0`), не пытается повторить отправку при ошибке (`retries=0`).  

```go
config := sarama.NewConfig()
config.Producer.RequiredAcks = sarama.NoResponse // acks=0
config.Producer.Retry.Max = 0                    // retries=0
producer, _ := sarama.NewSyncProducer([]string{"localhost:9092"}, config)
```
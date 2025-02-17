#prog/golang #prog/golang/map 

```go
set := make(map[string]bool) // Множество строк
```

> Не все значения `map[string]bool` являются просто множествами. Иногда это действительно map со значениями true и false

Так что лучше использовать `struct{}` – 0 байт
`bool` будет занимать 1 байт

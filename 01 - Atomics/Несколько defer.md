#prog/golang #prog #DEFER

**LIFO – стек**

Если defer несколько, они выполняются в порядке, обратном их объявлению

```go
defer ... // 1
defer ... // 2
defer ... // 3
```
```go
// defer 3
// defer 2
// defer 1
```

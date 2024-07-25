#prog_lang #prog_lang/golang #prog_lang/golang/concurrency 

Блокировка мьютекса не *реентерабельна* (не позволяет бло­кировать уже заблокированный мьютекс)

```go
import "sync"

var (
	mu sync.Mutex // Защищает balance
	balance int
)

func Deposit(amount int) {
	mu.Lock()
	balance = balance + amount
	mu.Unlock()
}

func Balance() int {
	mu.Lock()
	b := balance
	mu.Unlock()
	return b
}
```

> По соглашению охраняе­мые мьютексом переменные объявляются сразу же после объявления самого мью­текса

```go
func Balance() int {
	mu.Lock()
	defer mu.Unlock()
	return balance
}
```

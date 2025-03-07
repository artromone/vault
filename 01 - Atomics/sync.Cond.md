#prog #prog/golang #prog/concurrency 

Горутины ждут выполнения условия, прежде чем продолжить выполнение

**Всегда работает в связке с мьютексом**
```go
package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	var m sync.Mutex
	cond := sync.NewCond(&m)
	var data int

	// Горутина, которая ждет данных
	go func() {
		m.Lock()
		defer m.Unlock()
		for data == 0 {
			cond.Wait() // Ждем, пока data не станет не равной 0
		}
		fmt.Println("Данные получены:", data)
	}()

	// Горутина, которая отправляет данные
	go func() {
		time.Sleep(2 * time.Second) // Имитируем задержку
		m.Lock()
		data = 42
		cond.Signal() // Сигнализируем, что данные готовы
		m.Unlock()
	}()

	time.Sleep(3 * time.Second) // Даем время горутинам завершить работу
}
```
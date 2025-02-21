```go
tasks := make(chan int, 10)
// Запуск 3 работников
for i := 0; i < 3; i++ {
    go func(id int) {
        for task := range tasks {
            fmt.Printf("Worker %d: обработал %d\n", id, task)
        }
    }(i)
}
// Отправка задач
for i := 0; i < 10; i++ {
    tasks <- i
}
close(tasks)
```

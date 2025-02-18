#prog/golang #prog #prog/golang/map #prog/golang/slice 

```go
func Map[T, U any](slice []T, f func(T) U) []U {
    result := make([]U, len(slice))
    for i, v := range slice {
        result[i] = f(v)
    }
    return result
}

// Использование
numbers := []int{1, 2, 3}
doubled := Map(numbers, func(n int) int { return n * 2 })
```

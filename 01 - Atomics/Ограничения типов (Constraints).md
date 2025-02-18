#prog/golang #prog #JENERICS 

```go
import "golang.org/x/exp/constraints"

func Min[T constraints.Ordered](a, b T) T {
    if a < b {
        return a
    }
    return b
}
```

Свои ограничения создаются через интерфейсы:
```go
type Number interface {
    int | float64
}

func Sum[T Number](a, b T) T {
    return a + b
}
```

Методы в constraints запрещены
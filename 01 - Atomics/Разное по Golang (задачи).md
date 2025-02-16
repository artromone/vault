#prog/golang #prog 

> Что выведется?
```go
package main

import (
  "fmt"
  "math"
)

func main() {
  x := 2.0
  y := 3.0

  result := math.Pow(x, y)

  fmt.Println("%f ^ %f = %f\n", x, y, result)
}
```
```
%f ^ %f = %f
2 3 8
```

> Что выведется?
```go
func main() {
  fmt.Println("start")
  for i := 1; i < 4; i++ {
    defer fmt.Println(i)
  }
  fmt.Println("end")
}
```
```
start
end
3
2
1
```

> Что будет в результате выполнения теста?
```go
type User struct {
  Valid bool
  Id int64
  Number int32
}
type CUser struct {
  Id int64
  Number int32
  Valid bool
}
func TestSize(t *testing.T) {
  user := User{}
  cuser := CUser{}
  if unsafe.Sizeof(user) == unsafe.Sizeof(cuser) {
    t.Log("structs size are equal")
  }
}
```
```
не равны, 24 и 16
```

> Какие строки работают нормально, а какие нет и почему?
```go
package main

type T []int
func (T) X(){}
func (*T) Z(){}

func main() {
    var t T
    t.X() // 1
    t.Z() // 2
    var p = &t
    p.X() // 3
    p.Z() // 4
    T{}.X() // 5
    T{}.Z() // 6
}
```
```
Корректно все кроме 6, адрес временной переменной получить нельзя
```

> 1. Расскажи подробно что происходит
> 2. Как сделать так, чтобы работало?
```go
package main

import "fmt"

func main() {
    str := "Привет"
    str[2] = 'e'
    fmt.Println(str)
}
```
```
строки неизменяемы, доступ к байту на позиции 2, а для кириллици каждый символ 2 байта
надо через слайс рун
runes := []rune(str)
runes[2] = 'e'
str = string(runes)
```

> Что выведет код и почему?
```go
package main

import "fmt"

func main() {
	a := []int{10, 20, 30, 40}
	b := make([]*int, len(a))
	for i, v := range a {
		b[i] = &v
	}
	fmt.Println(*b[0], *b[1])
}
```
```
1.22 пофиксили, 1.21 был флаг чтобы изменить поведение
```
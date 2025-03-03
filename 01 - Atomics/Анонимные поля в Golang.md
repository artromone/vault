#prog #prog/golang #prog/golang/struct #/todo

> Поле с типом, но без имени

> Не может быть двух анонимных полей одинакового типа, так как их имена будут конфликтовать

```go
type Circle struct {
	Point
	Radius int
}

type Wheel struct {
	Circle
	Spokes int
}
```
`Point` встроен (embedded) в тип `Circle`, a `Circle` встроен в `Wheel`

Можно обращаться к именам **в листьях** неявного дере­ва без указания промежуточных имен

```go
var w Wheel
w.X = 8      // Эквивалентно записи w.Circle.Point.X = 8
w.Y = 8      // Эквивалентно записи w.Circle.Point.Y = 8
w.Radius = 5 // Эквивалентно записи w.Circle.Radius = 5
w.Spokes = 20
```

Для структурного литерала придется указывать полностью
`w = Wheel{ Circle{ Point{ 8, 8 }, 5 }, 20 }`
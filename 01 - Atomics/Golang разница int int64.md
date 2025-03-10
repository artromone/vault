#prog/golang #prog #prog/golang/defer

- **`int`**  
    Зависит от архитектуры:
    - 32 бита на 32-битных системах (диапазон: от -2³¹ до 2³¹−1)
    - 64 бита на 64-битных системах (диапазон: от -2⁶³ до 2⁶³−1)
    Используется для индексов, длины массивов/срезов (например, `len(slice)` возвращает `int`)  
- **`int64`**  
    Всегда 64 бита, независимо от архитектуры (диапазон: от -2⁶³ до 2⁶³−1)
    Используется, когда требуется гарантированный размер (например, работа с файлами >2 ГБ, внешние API)

- **`rune`** — псевдоним для `int32`, хранит Unicode-символы
- **`byte`** — псевдоним для `uint8`, используется для бинарных данных
- **`int8`/`int16`** — редко используются, но полезны для экономии памяти в больших массивах

```go
type Struct struct {
    a int8  // 1 байт + 7 байт padding (на 64-битной системе)
    b int64 // 8 байт
} // Итого: 16 байт вместо ожидаемых 9.
```
[[Выравнивание в Golang]]
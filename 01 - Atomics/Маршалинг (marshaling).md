#prog_lang #prog_lang/golang

> Преобразование структуры данных Go в JSON 

- Маршализуются только экспортируемые поля

```go
type Movie struct {
Title  string
Year   int      'json:"released"'        // -- дескриптор поля (метаданные, связанные 
Color  bool     'json:"color,omitempty"' // со структурой во время компиляции)
Actors []string                // ↑ -- если поле имеет нулевое значение, вывода в JSON не нужно 
}

var movies = []Movie{
	{Title: "Casablanca", Year: 1942, Color: false, 
		Actors: []string{"Humphrey Bogart", "Ingrid Bergman"}},
	{Title: "Cool Hand Luke", Year: 1967, Color: true, 
		Actors: []string{"Paul Newman"}},
	{Title: "Bullitt", Year: 1968, Color: true, 
		Actors: []string{"Steve McQueen", "Jacqueline Bisset"}},
}

data, err := json.Marshal(movies)
if err != nil {
	log.Fatalf("Сбой маршалинга JSON: %s", err)
}
fmt.Printf("%s\n", data)
```
```
[{"Title":"Casablanca","released":1942,"Actors":["Humphrey Bogart","Ingrid Bergman"]},{"Title":"Cool Hand Luke","released":1967,"color":true,"Actors":["Paul Newman"]},{"Title":"Bullitt","released":1968,"color":true,"Actors":["Steve McQueen","Jacqueline Bisset"]}]
```

`Marshallndent` сделать форматирование в удобночитаемом виде
`json.MarshalIndent(movies, "", " ")` – два доп аргумента для строки вывода и уровня отступа

#prog #prog/golang #prog/golang/goroutines 

> Сколько потоков ОС могут одновременно активно выполнять код
> Определяет максимальное количество P (виртуальных процессоров)
 
 Его значение по умолчанию равно количеству процессоров компьютера (числу CPU ядер)


`GOMAXPROCS` равно значению `n` в [[Планировщик Go]]
Можно изменить через `runtime.GOMAXPROCS(n)`
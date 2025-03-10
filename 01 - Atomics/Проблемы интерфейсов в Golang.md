#prog #prog/golang/interface #prog/golang 

Мы можем присвоить переменную типа `io.ReadWriter` переменной типа `io.Reader`, но мы не можем присвоить переменную типа `[]io.ReadWriter` переменной типа `[]io.Reader`

**Почему нельзя присвоить `[]io.ReadWriter` переменной типа `[]io.Reader`?**  

1. **Принцип типизации в Go**:  
   - В Go срезы (slices) и массивы (arrays) являются **инвариантными** по типу. Это означает, что `[]io.ReadWriter` и `[]io.Reader` — это совершенно разные типы, даже если `io.ReadWriter` реализует интерфейс `io.Reader`.  
   - Go не поддерживает **ковариантность** (когда тип контейнера может изменяться в зависимости от типа его элементов).  

2. **Проблема безопасности типов**:  
   - Если бы присвоение `[]io.ReadWriter` к `[]io.Reader` было разрешено, это могло бы привести к нарушению типизации. Например:  
     ```go
     var readers []io.Reader
     var readWriters []io.ReadWriter = /* ... */
     readers = readWriters // Если бы это было разрешено
     readers[0] = /* объект, который только io.Reader, но не io.Writer */
     readWriters[0].Write(...) // Ошибка: объект не реализует io.Writer
     ```  
   - Это нарушило бы безопасность типов, так как `readers` мог бы содержать объекты, не реализующие `io.Writer`.  

3. **Как обойти это ограничение**:  
   - Можно создать новый срез `[]io.Reader` и вручную скопировать элементы:  
     ```go
     var readWriters []io.ReadWriter = /* ... */
     readers := make([]io.Reader, len(readWriters))
     for i, rw := range readWriters {
         readers[i] = rw
     }
     ```  
   - Это безопасно, так как каждый элемент `io.ReadWriter` гарантированно реализует `io.Reader`.  

**Ключевое**: Срезы в Go инвариантны по типу, и присвоение `[]io.ReadWriter` к `[]io.Reader` запрещено для обеспечения безопасности типов.
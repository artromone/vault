#prog/db/sql 

> Часто возникают, когда пользователю предлагают ввести данные, а он вносит SQL выражение, которое неосознанно применяется к базе данных

```sql
txtUserId = getRequestString("UserId");  
txtSQL = "SELECT * FROM Users WHERE UserId = " + txtUserId;
```

Примеры:
- 1=1 is Always True
- ""="" is Always True

Комплексное SQL выражение – несколько выражений, разделенных `;`

Чтобы избежать инъекций, можно использовать SQL параметры:
```sql
txtUserId = getRequestString("UserId");  
txtSQL = "SELECT * FROM Users WHERE UserId = @0";  
db.Execute(txtSQL,txtUserId);

txtNam = getRequestString("CustomerName");  
txtAdd = getRequestString("Address");  
txtCit = getRequestString("City");  
txtSQL = "INSERT INTO Customers (CustomerName,Address,City) Values(@0,@1,@2)";  
db.Execute(txtSQL,txtNam,txtAdd,txtCit);
```

SQL проверяет каждый параметр, что он применим к column и не является выражением SQL
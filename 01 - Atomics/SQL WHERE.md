#prog/db/sql 

> Фильтрация тех row, которые соответствуют условию

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```
```sql
SELECT * FROM Customers  
WHERE Country='Mexico'; -- для большинства значений строки, для чисел не нужно
```

Разрешенные условия:

|Operator|Description|
|---|---|
|=|Equal| |
| >       | Greater than                                                                    |
| <       | Less than                                                                       |
| >=      | Greater than or equal                                                           |
| <=      | Less than or equal                                                              |
| <>      | Not equal. **Note:** In some versions of SQL this operator may be written as != |
| BETWEEN | Between a certain range                                                         |
| LIKE    | Search for a pattern                                                            |
| IN      | To specify multiple possible values for a column                                |
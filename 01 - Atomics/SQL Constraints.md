#prog #prog/db/sql

> Задание определенных правил для данных в таблице

Могут быть заданы при создании таблицы `CREATE` или добавлены используя `ALTER`

```sql
CREATE TABLE table_name (  
    column1 datatype constraint,
    column2 datatype constraint,
    column3 datatype constraint,
    ...  
);
```

Нужны для огранчения данных в таблице по определенным правилам
Если данные не соответствуют требованиям, действие отменяется

Их можно установить для `column` или всей таблицы

- [[SQL NOT NULL]] - В column не может быть [[SQL NULL]] значения
- [[SQL UNIQUE]] - Все значения в column должны быть разными
- [[SQL PRIMARY KEY]] - Комбинация [[SQL NOT NULL]] и [[SQL UNIQUE]]. Уникальный идентификатор для каждого row таблицы
- [[SQL FOREIGN KEY]] - Запрещает разрыв связи между таблицами
- [[SQL CHECK]] - Проверка что значения column соответствуют определенным условиям
- [[SQL DEFAULT]] - Задает дефолтное значение, если никакого не указано
- [[SQL CREATE INDEX]] - Used to create and retrieve data from the database very quickly
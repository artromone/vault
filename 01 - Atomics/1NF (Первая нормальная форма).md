#prog #prog/db 

- Все атрибуты аномальны (неделимы)
- Нет повторяюшихся групп данных

**Пример нарушения**:  

| OrderID | ProductIDs |
| ------- | ---------- |
| 1       | 101, 102   |
**Проблема**: Столбец `ProductIDs` содержит списки.  

**Исправление**:  

|OrderID|ProductID|
|---|---|
|1|101|
|1|102|
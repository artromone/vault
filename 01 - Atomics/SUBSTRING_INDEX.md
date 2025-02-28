#prog/db/sql #prog #prog/db 

```
SUBSTRING_INDEX(string, delimiter, number)
```
```sql
SUBSTRING_INDEX(email, '@', 1) AS address
SUBSTRING_INDEX(email, '@', -1) AS domain
```

| Параметр    | Описание (ВСЕ ПАРАМЕТРЫ ОБЯЗАТЕЛЬНЫ)                                                                                                                        |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Строка      |                                                                                                                                                             |
| Разделитель |                                                                                                                                                             |
| Число       | Количество раз, которое надо искать Разделитель. Может быть >0 и <0. Если >0, возвращает все что слева разделителя. Если <0, то все что справа разделителя. |

Либо можно через [[SUBSTRING]]
```sql
SUBSTRING(email, 1, POSITION('@' IN email) - 1) AS address
SUBSTRING(email, POSITION('@' IN email) + 1) AS domain
```

#prog/db/sql 

| Символ | Описание                            |
| ------ | ----------------------------------- |
| %      | 0 или больше символов               |
| _      | 1 символ                            |
| []     | Один из перечисленных внутри`*`     |
| ^      | Любой не из перечисленных внутри`*` |
| -      | Любой символ из промежутка`*`       |
| {}     | Любой экранированный символ`**`     |

`*` Нет в PostgreSQL и MySQL
`**` Только Oracle

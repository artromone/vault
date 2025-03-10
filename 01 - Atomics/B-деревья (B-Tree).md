#prog #prog/db 

- Сбалансированное дерево, каждый узел содержит ключи и ссылки на дочерние узлы
- Все листья находятся на одном уровне
- Пример: `[10, 20, 30]` в узле, где ключи разделяют данные на диапазоны (всё < 10, 10–20 и т.д.)

![[B-деревья (B-Tree)-1739647316606.jpeg]]

##### Почему популярны
- Эффективны для **диапазонных запросов** (`BETWEEN`, `>`, `<`)
- Логарифмическая сложность поиска: `O(log n)`
- Оптимизированы для работы с диском: узлы хранят много ключей, уменьшая число обращений к диску
##### Где используется
- Стандартные индексы в PostgreSQL, MySQL (InnoDB)
- Подходят для уникальных и неуникальных ключей

```sql
CREATE INDEX idx_users_email ON users(email);
```

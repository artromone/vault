#prog/db/sql #prog/db #prog 

> Одна запись в таблице А связана с несколькими записями в таблице Б, но каждая запись в таблице Б принадлежит только одной записи в таблице А

**Пример из жизни**:
- **Блог** (таблица `blogs`) имеет много **Постов** (таблица `posts`)
- Один пост принадлежит только одному блогу

Для связи **один к одному** внешний ключ может быть в любой таблице, но обычно его размещают в таблице, которая «зависит» от другой (например, `passports.user_id`)

```sql
CREATE TABLE blogs (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE posts (
    id INT PRIMARY KEY,
    title VARCHAR(255),
    blog_id INT, -- Внешний ключ
    FOREIGN KEY (blog_id) REFERENCES blogs(id)
);
```

```go
type Blog struct {
    ID    uint   `gorm:"primaryKey"`
    Name  string
    Posts []Post // Связь один ко многим
}

type Post struct {
    ID      uint   `gorm:"primaryKey"`
    Title   string
    BlogID  uint   // Внешний ключ
}
```

GORM
```go
// Создание блога с постами
blog := Blog{
    Name: "Мой блог",
    Posts: []Post{
        {Title: "Первый пост"},
        {Title: "Второй пост"},
    },
}
db.Create(&blog)

// Загрузка блога с его постами
var fetchedBlog Blog
db.Preload("Posts").First(&fetchedBlog, 1)
```
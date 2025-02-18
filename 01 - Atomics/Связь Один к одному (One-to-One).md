#prog/db/sql #prog/db #prog 

> Одна запись в таблице А связана ровно с одной записью в таблице Б, и наоборот

**Пример из жизни**
- **Пользователь** (таблица `users`) имеет один **Паспорт** (таблица `passports`)
- Паспорт принадлежит только одному пользователю

Для связи **один ко многим** внешний ключ находится в таблице "многих" (например, `posts.blog_id`)

```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE passports (
    id INT PRIMARY KEY,
    number VARCHAR(255),
    user_id INT UNIQUE, -- Уникальный внешний ключ
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

```go
type User struct {
    ID       uint     `gorm:"primaryKey"`
    Name     string
    Passport Passport // Связь один к одному
}

type Passport struct {
    ID     uint   `gorm:"primaryKey"`
    Number string
    UserID uint   // Внешний ключ (уникальный)
}
```

GORM

```go
// Создание пользователя с паспортом
user := User{
    Name: "Иван",
    Passport: Passport{Number: "AB123456"},
}
db.Create(&user)

// Загрузка пользователя с паспортом
var fetchedUser User
db.Preload("Passport").First(&fetchedUser, 1)
```

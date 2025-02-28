#prog/db/sql #prog #prog/db 

> Найдите все комедии продолжительностью более трёх часов. Напишите SQL запрос возвращающий результат состоящий из трёх столбцов: названия фильма, года выхода на экран и продолжительности в минутах отсортированный по длине фильма.
```sql
-- SELECT  f.title , f.release_year , f.length 
-- FROM film f
-- WHERE f.length > 180 AND
-- film_id IN
-- (SELECT fc.film_id 
-- FROM film_category fc
-- INNER JOIN category c ON fc.category_id = c.category_id
-- WHERE c.name = 'Comedy')
-- ORDER BY length

SELECT  f.title , f.release_year , f.length 
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
WHERE f.length > 180 AND
fc.category_id = (SELECT c.category_id FROM category c WHERE c.name = 'Comedy')
ORDER BY length
```

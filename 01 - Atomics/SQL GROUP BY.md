#prog_lang #prog_lang/sql 

> Группирует rows одинакового типа в итоговые rows. Часто используется вместе с [[SQL Aggregate]]

```sql
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)  
ORDER BY column_name(s);
```
```sql
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department;
```
> запрос группирует сотрудников по отделу и вычисляет среднюю зарплату для каждого отдела
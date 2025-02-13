#prog_lang #prog_lang/sql 

> Копирует значения из одной таблицы в новую

```sql
SELECT * -- или SELECT _column1_, _column2_, _column3_, ...
INTO newtable [IN externaldb]  
FROM oldtable
WHERE condition;
```
```sql
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department;
```

Скопировать в другую базу данных:
```sql
SELECT * INTO CustomersBackup2017 IN 'Backup.mdb'  
FROM Customers;
```
```sql
SELECT CustomerName, ContactName INTO CustomersBackup2017  
FROM Customers;
```

Создать пустую таблицу по схеме другой:
```sql
SELECT * INTO newtable
FROM oldtable
WHERE 1 = 0;
```

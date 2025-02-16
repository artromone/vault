#/tmp 

1 сеанс
```bash
❯ docker exec -it postgres_db psql -U admin -d test_db
psql (17.3 (Debian 17.3-1.pgdg120+1))
Type "help" for help.

test_db=# BEGIN;
BEGIN
test_db=*# SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SET
test_db=*# UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE 1
test_db=*# COMMIT;
COMMIT
test_db=#
```

2 сеанс
```bash
❯ docker exec -it postgres_db psql -U admin -d test_db
psql (17.3 (Debian 17.3-1.pgdg120+1))
Type "help" for help.

test_db=# BEGIN;
BEGIN
test_db=*# SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SET
test_db=*# UPDATE accounts SET balance = balance - 50 WHERE id = 1;
UPDATE 1
test_db=*# COMMIT;
COMMIT
test_db=#
```

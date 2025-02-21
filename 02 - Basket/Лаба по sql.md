-- 1. Создание тестовой таблицы и данных
CREATE TABLE IF NOT EXISTS accounts (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(50) NOT NULL,
    balance DECIMAL(10,2) NOT NULL
);

TRUNCATE TABLE accounts RESTART IDENTITY;
INSERT INTO accounts (user_id, balance)
SELECT 'user_' || i, 100.00
FROM generate_series(1, 30) AS i;

-- 2. Проверка аномалий для READ COMMITTED (и READ UNCOMMITTED)
-- 2.1 Неповторяющееся чтение (Non-repeatable read)
-- Сессия 1
BEGIN;
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SELECT balance FROM accounts WHERE user_id = 'user_1'; -- Шаг 1: Чтение 100.00
-- Шаг 3: Повторное чтение покажет 150.00
SELECT balance FROM accounts WHERE user_id = 'user_1';
COMMIT;

-- Сессия 2
BEGIN;
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
UPDATE accounts SET balance = 150.00 WHERE user_id = 'user_1'; -- Шаг 2
COMMIT;

-- 2.2 Фантомное чтение (Phantom read)
-- Сессия 1
BEGIN;
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SELECT COUNT(*) FROM accounts; -- Шаг 1: 30 записей
-- Шаг 3: Покажет 31 запись
SELECT COUNT(*) FROM accounts;
COMMIT;

-- Сессия 2
BEGIN;
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
INSERT INTO accounts (user_id, balance) VALUES ('user_31', 100); -- Шаг 2
COMMIT;

-- 3. Проверка для REPEATABLE READ
-- 3.1 Неповторяющееся чтение (должно отсутствовать)
-- Сессия 1
BEGIN;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SELECT balance FROM accounts WHERE user_id = 'user_1'; -- Шаг 1: 150.00
-- Шаг 3: Останется 150.00 (не увидит изменения)
SELECT balance FROM accounts WHERE user_id = 'user_1';
COMMIT;

-- Сессия 2
BEGIN;
UPDATE accounts SET balance = 200.00 WHERE user_id = 'user_1'; -- Шаг 2
COMMIT;

-- 3.2 Фантомное чтение (должно отсутствовать)
-- Сессия 1
BEGIN;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SELECT COUNT(*) FROM accounts; -- Шаг 1: 31 запись
-- Шаг 3: Останется 31 запись
SELECT COUNT(*) FROM accounts;
COMMIT;

-- Сессия 2
BEGIN;
INSERT INTO accounts (user_id, balance) VALUES ('user_32', 100); -- Шаг 2
COMMIT;

-- 4. Проверка для SERIALIZABLE (аномалия сериализации)
-- Сессия 1
BEGIN;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
SELECT SUM(balance) FROM accounts; -- Шаг 1: 3100.00
-- Шаг 3: Вставка данных
INSERT INTO accounts (user_id, balance) VALUES ('user_33', 100);
COMMIT; -- Вызовет ошибку сериализации

-- Сессия 2
BEGIN;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
SELECT SUM(balance) FROM accounts; -- Шаг 2: 3100.00
INSERT INTO accounts (user_id, balance) VALUES ('user_34', 100);
COMMIT; -- Вызовет ошибку сериализации

[[SQL CHECK]]

```sql
CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    balance DECIMAL(10, 2) NOT NULL,
    CONSTRAINT balance_non_negative CHECK (balance >= 0)
);
```

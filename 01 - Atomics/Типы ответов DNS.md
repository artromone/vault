#prog #prog/network #prog/network/protocol/dns

Авторитетный
- Ответ от сервера, обслуживающего доменную зону
- Получен из конфигурационных файлов на диске сервера

Неавторитетный
- Ответ от сервера, который не обслуживает доменную зону
- Получен из кеша, данные могли устареть (но они меняются крайне редко)

```
❯ nslookup habr.com
Server:         127.0.0.1
Address:        127.0.0.1#53

Non-authoritative answer:
Name:   habr.com
Address: 178.248.237.68
```

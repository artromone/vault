#prog/docker

> Обе команды используются, чтобы задать команду запуска контейнера – какая команда должна запуститься, когда контейнер будет поднят

В общем случае не важно, какую команду использовать
Но команды используются для разных целей

Особенно, когда в одном dockerfile используются обе инструкции одновременно

- dockerfile должен определять хотя бы одну команду из двух
- `ENTRYPOINT` используется при использовании контейнера как executable
- `CMD` – способ определить дефолтные аргументы для `ENTRYPOINT` или исполнить ad-hoc команду в контейнере (дополняет `ENTRYPOINT`)
- `CMD` перезатрется при запуске контейнера с явным указанием аргументов

|                                | **No ENTRYPOINT**          | **ENTRYPOINT exec_entry p1_entry** | **ENTRYPOINT [“exec_entry”, “p1_entry”]**      |
| ------------------------------ | -------------------------- | ---------------------------------- | ---------------------------------------------- |
| **No CMD**                     | **error, not allowed**     | /bin/sh -c exec_entry p1_entry     | exec_entry p1_entry                            |
| **CMD [“exec_cmd”, “p1_cmd”]** | exec_cmd p1_cmd            | /bin/sh -c exec_entry p1_entry     | exec_entry p1_entry exec_cmd p1_cmd            |
| **CMD [“p1_cmd”, “p2_cmd”]**   | p1_cmd p2_cmd              | /bin/sh -c exec_entry p1_entry     | exec_entry p1_entry p1_cmd p2_cmd              |
| **CMD exec_cmd p1_cmd**        | /bin/sh -c exec_cmd p1_cmd | /bin/sh -c exec_entry p1_entry     | exec_entry p1_entry /bin/sh -c exec_cmd p1_cmd |
#prog/docker 

Монтирование папок в специальном месте `/var/lib/docker/volumes/`
Используются, чтобы сохранить данные из контейнера
Контролируются докером

volume сохраняются, если контейнер упадет

volume есть смысл удалять, они жрут место на диске

volume могут создаваться по умолчанию – автоматически при поднятии контейнера (им дается id, поэтому они называются неименованные/анонимные)
за это отвечает инструкция VOLUME

Если в [[docker-compose]] не указывать название явно, docker сгенерирует его из названия папки


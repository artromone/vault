#prog #prog/network #prog/network/protocol/http 

Чтобы определить, изменилась ли страница на сервере или нет
**Запрос GET с условием – Conditional Get (запрос передать ресурс, если он изменился)**
Два варианта:
- по содержимому ресурса – ETag (обычно хеш содержимого) – `If-None-Match`
- по дате последнего изменения – Last-Modified – `If-Modified-Since`

Если ресурс не изменился – короткое 304 Not Modified, возможно с доп заголовками Expires, Last-Modified, Cache-Control
Если изменился – полная передача обновленной версии ресурса, 200 OK
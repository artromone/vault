#network #network/protocol 

> TCP и UDP *не обеспечивают защиту*. Данные передаются как есть. Если их перехватить, то, теоретически, всю информацию можно прочитать. Есть необходимость передавать данные **защищенно**.

Протокол **TLS (Transport Layer Security)** основан на протоколе **SSL (Secure Sockets Layer)** (который сейчас устарел) и работает поверх **TCP** 

Для работы с UDP была разработана специальная версия TLS: **DTLS (Datagram Transport Layer Security)**

TLS обеспечивает
- Шифрование
- Проверку подлинности клиента/сервера
- Обнаружение подмены информации

[[Установка соединения TLS]]
[[Шифрование TLS]]

К протоколам [прикладного уровня](Прикладной%20уровень) принято добавлять `s` (`secure`), если они используют TLS при передаче данных

Пример: **HTTPs** (**HTTP secure**)
#prog/golang #prog #prog/concurrency 

- **Потоки ОС**:
    - Создание потока требует выделения большого стека (1–2 МБ по умолчанию)
    - Переключение между потоками (context switching) требует взаимодействия с ядром ОС, что медленно
    - Обычное приложение не может создать тысячи потоков из-за ограничений памяти и CPU
- **Решение через горутины**:
    - Горутины имеют **динамический стек** (начинается с ~2 КБ и растёт/сжимается по мере необходимости)
    - Переключение между горутинами происходит **на уровне пользовательского пространства** (без вызовов ядра ОС)
    - Можно создавать миллионы горутин без нагрузки на систему

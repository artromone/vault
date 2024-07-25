#prog_lang #prog_lang/golang #prog_lang/golang/concurrency 

>  Несколько читателей, один писатель

*Использовать RWMutex выгодно только тогда, когда большинству go-подпрограмм требуется блокировка читателей, и за блокировку ведется состязание, т.е. go-подпрограммам приходится регулярно ожидать для ее захвата. RWMutex требует бо­лее сложной внутренней бухгалтерии, что делает его медленнее обычных мьютексов*
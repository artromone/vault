#prog #prog/cpp 

Используется не так часто, есть ряд нюансов, про которые необходимо помнить при использовании данного типа данных.

Union — способ использовать один и тот же участок памяти под разные типы данных. Union укладывает в один и тот же размер памяти разные объекты. Под объекты типа выделяется память, достаточная для содержания **самого тяжелого объекта**. С помощью инициализации можно получить объект, который является либо точкой, либо линией.

В функциональных языках `union` широко представлен.

*Обращаться к полям одного объекта через другой*, **если оно не инициализированно**, *нельзя, это неопределенное поведение* ([[Виды поведения]]).

Так как помнить о том, что конкретно этот объект был создан под точку, а вот этот под линию (например, то есть речь про разные типы данных) невозможно, обычно используют дополнительные переменные, которые говорят о том, какой конкретно тип в объединении был использован (можно сделать через `enum` либо **булевые флаги**). 

#prog_lang #prog_lang/cpp 

`constexpr`: введён в стандарт программирования языка C++11 для обозначения константных
выражений, которые могут быть **вычислены во время компиляции кода**.

`constexpr unsigned int U_INT_MAX std::numeric_limits<unsigned int>::max();`
`constexpr int START 1 + 2;`

Спецификатор `constexpr`, аналогично унаследованному спецификатору `const`, может быть
использован по отношению к переменным, однако, помимо них, его можно также использовать в **объявлениях функций и конструкторов классов**.

[[Прототип (объявление) функции]], [[Конструкторы]]
#prog/cpp #prog 

[[Внешние объявления]]

Рассмотрим этот пример

```c++
// main.cpp
#include <iostream>

int main() {
    extern int x;
    std::cout << "x = " << x << std::endl;
    return 0;
}
```

```c++
// x.cpp
int x = 42;
```

```c++
// y.cpp
int x = 84;
```

Здесь в единице трансляции `main.cpp` объявляется переменная `x` как `extern int x`, то есть говорится о том, что переменная `x` определена в другом месте, и будет определена во время линковки.

Внешние переменные вводятся как **противоположные автоматическим**. Это глобальные переменные и к ним можно обращаться именами из любой функции. Поскольку внешние переменные доступны везде, **их можно использовать для связи между функциями, не пренебрегая механизму формальных параметров**.

Класс памяти `extern` в Си используем в двух случаях:
-   если переменная объявляется в программе *ниже, чем ссылка на неё*
-   если переменная объявлена *в другом модуле*

```c++
#include <stdio.h>
int x=145; // Описание внешней переменной
main()
{
	extern int x,y;
	printf("x=%d y=%d \n",x,y);
}
int y=541; // Описание внешней переменной
```

**Внешние** переменные могут определятся **вне какой-либо функции** при этом выделяется *фактическая память*. В любой другой функции, обращающейся к этим переменным, они должны описываться с помощью описателя `extern`.

> Объявление, в отличие от определения, не создает переменную.

Объявление с `extern` не должно содержать инициализацию: **если она присутствует, модификатор `extern` игнорируется**.
Все описания одной и той же переменной должны быть согласованы.
Если **глобальная переменная описана как static**, область ее действия ограничивается файлом, в котором она описана.
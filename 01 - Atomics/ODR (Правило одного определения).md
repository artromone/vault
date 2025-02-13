#prog #prog/cpp 

> ODR — не более одного определения сущности на единицу трансляции, и сколько угодно объявлений

Пример:

```c++ 
//foo.h
#pragma once

void foo(); // объявление функции
```

```c++
//foo.cpp
#include "foo.h"
#include <iostream>

void foo() // определение функции
{
    std::cout << "Hello, world!" << std::endl;
}
```

```c++
//main.cpp
#include "foo.h"
#include <iostream>

void foo(); // еще одно объявление функции

int main()
{
    foo(); // вызов функции
    return 0;
}
```

**Может быть только объявлено но не определено
Или определено один раз: 1 или 0**

**Ни одна единица трансляции не должна содержать более одного определения переменной, функции, типа (enum, struct, class) или шаблона**

```cpp
//Заголовочный файл, с «объявлениями» foo.h
struct Value { int val; };
int foo(const Value &);
```

```cpp
// Файл с исходным текстом, с реализациями foo.cpp
#include "foo.h"
int foo(const Value & v) {
	return v.val;
}
```

```cpp
// Файл с исходным текстом с реализациями main.cpp
#include "foo.h"
int main() {
	Value v1;
	v1.val = 10;
	return foo(v1);
}
```

```cpp
// Единица трансляции (1)
struct Value { int val; };
int foo(const Value &);
int main() {
	Value v1;
	v1.val = 10;
	return foo(v1);
}
```

```cpp
// Единица трансляции (2)
struct Value { int val; };
int foo(const Value &);
int foo(const Value & v) { 
	return v.val;
}
```

[[Header Guards]]

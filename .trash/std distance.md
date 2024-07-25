`std::distance` находит расстояние между двумя указателями

```c++
#include <iostream>
#include <vector>
#include <iterator>
 
int main() {
    std::vector<int> v = { 1, 2, 3, 4, 5 };
 
    // Определяем начало и конец вектора
    auto begin = std::begin(v);
    auto end = std::end(v);
 
    // Вычисляем расстояние между началом и концом вектора
    auto distance = std::distance(begin, end);
 
    std::cout << "Размер вектора: " << distance << std::endl;
 
    return 0;
}
```
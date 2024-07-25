[[Временная сложность merge]]

Если список уже отсортирован:
```
function merge(sea, fresh)
····result ← List.new
····while not (sea.empty and fresh.empty)
········if sea.top_item > fresh.top_item
············fish ← sea.remove_top_item
·······else
···········fish ← fresh.remove_top_item
·····result.append(fish)
return result
```

Алгоритм выполняет обход всех названий рыб из входных списков, совершая фиксированное число операций для каждого элемента. 

> **Следовательно, алгоритм слияния merge имеет сложность O(n)**
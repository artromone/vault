#prog #prog/java 

JIT (Just-In-Time) компиляция - это оптимизационная техника, используемая виртуальными машинами как JVM для повышения производительности

==Зачем нужна JIT компиляция?==

- При первом запуске Java-программы JVM интерпретирует байт-код медленно, построчно.
- JIT-компилятор анализирует и отслеживает наиболее часто выполняемые фрагменты программы.
- Эти фрагменты («горячие точки») динамически компилируются в машинный код процессора текущей платформы.
- Дальше вместо интерпретации байт-кода выполняется скомпилированный машинный код, что значительно ускоряет работу.
- По мере выполнения приложения профиль его работы может меняться - JIT динамически реагирует на это, рекомпилируя код.

```java
javac Hi.java   – компиляция
java Hi         – запуск
```

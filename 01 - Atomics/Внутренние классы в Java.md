#prog_lang #prog_lang/java #prog_lang/oop

Внутренний класс – частный пример [[Композиция]]

[[Схема внутренних классов в Java]]

```java
public class Program{
      
    public static void main(String[] args) {
             
        Person tom = new Person("Tom", "qwerty");
        tom.displayPerson();
        tom.account.displayAccount();
    }
}
class Person{
     
    private String name;
    Account account;
 
    Person(String name, String password){
        this.name = name;
        account = new Account(password);
    }
    public void displayPerson(){
        System.out.printf("Person \t Name: %s \t Password: %s \n", name, account.password);
    }
 
    public class Account{
        private String password;
         
        Account(String pass){
            this.password = pass;
        }
        void displayAccount(){
            System.out.printf("Account Login: %s \t Password: %s \n", Person.this.name, password);
        }
    }
}
```

Объекты внутреннего класса могут быть созданы только внутри внешнего класса

Внутренний класс имеет доступ ко всем полям внешнего класса и наоборот, даже `private`

Можно получить ссылку на объект внешнего класса: `Person.this`

Внутренние классы можно объявить внутри любого контекста, даже в методе


Есть еще [[Статические вложенные классы]]

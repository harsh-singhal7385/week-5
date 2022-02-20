interface Interface{
    void interface_func();
}

abstract class AbstractClass{
    abstract void abstract_func();
}

class Subclass extends AbstractClass implements Interface{
    void abstract_func(){
        System.out.println("Hi -> Inside Abstract Function");
    }

    public void interface_func() {
         System.out.println("Hello -> Inside Abstract Function");
    }
}

public class Q1{
    public static void main(String args[]){
        
        Subclass sub = new Subclass();
        
        sub.abstract_func();
        sub.interface_func();
    }
}

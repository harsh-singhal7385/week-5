import java.util.*;

class ArrList {
    
     List<Integer> num = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8);
     
     public void for_loop() {
     System.out.println(" ArrayList using For Loop");
     for (int i = 0; i < num.size(); i++)
     {
        System.out.print(num.get(i) + " ");
     }
    }
     
     public void while_loop() {
     System.out.println("\n ArrayList using While Loop");
     int val = 0;
     while (num.size() > val) {
     System.out.print(num.get(val) + " ");
     val++ ;
     }
     }
     
     public void advance_loop() {
     System.out.println("\n ArrayList using Advance For Loop");
     for(int i:num) 
     {  
         System.out.print(i+" ");
     }
}
}

public class Q3 {
    
     public static void main(String[] args) {
         
     ArrList obj = new ArrList();
     obj.for_loop();
     obj.while_loop();
     obj.advance_loop();
     }
}

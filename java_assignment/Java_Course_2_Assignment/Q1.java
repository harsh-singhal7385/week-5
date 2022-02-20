import java.util.*;
import java.io.*;

public class Q1 {
    
    public static void main(String[] args){
        
        List<Integer> li = Arrays.asList(1,2,3,4,5,6,7,8,9,10,11,12);

        Collections.shuffle(li);
        
        System.out.println("Using Stream");
        li.stream().forEach((num)->{
            System.out.print(num+" ");
        });
        
        Collections.shuffle(li);
        
        System.out.println("\n\nUsing Traditonal Enhanced");
        for(int num : li){
            System.out.print(num+" ");
        }
    }    
}

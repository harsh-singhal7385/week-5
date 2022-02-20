import java.util.*;

public class Q5 {
    
     public static int second_large(Integer[] x, int total){
         
     List<Integer> input_list = Arrays.asList(x);
     Collections.sort(input_list);
     Collections.reverse(input_list);
     
     int element = input_list.get(total-total+1);
         return element;
     
     }
 
     public static void main(String args[]){
         
     Integer a[]={8,6,5,2,0};
     System.out.println("Second highest number in array :"+ second_large(a,a.length));
    
     }
 
}


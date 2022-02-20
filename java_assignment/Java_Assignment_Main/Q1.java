
import java.util.Iterator;
import java.util.HashMap;
class HashMapClass{
    
     public HashMap<Integer, String> hash_map = new HashMap<Integer, String>();
     
     public void while_loop(){
         
     hash_map.put(1,"abc");
     hash_map.put(2,"lmn");
     hash_map.put(3, "pqr");
     hash_map.put(4, "xyz");
     
     Iterator <Integer> iter = hash_map.keySet().iterator();
     int key;
     while(iter.hasNext())
     {
     key = (int)iter.next();
     System.out.println("emp_id.: "+key+" emp_name: "+hash_map.get(key));
     }
     
     }
     
     public void advance_loop(){
    
     hash_map.forEach((key,val) -> System.out.println("Emp_ID: " + key + ", Emp_Name: "+ val));
    
     }
}

public class Q1 {
    public static void main(String[] arg){
         
        HashMapClass hash_map = new HashMapClass();
        
        System.out.println("HashMap using while loop");
        hash_map.while_loop();
        
        System.out.println("\nHashMap using advanced for loop");
        hash_map.advance_loop();
        }
}

import java.util.HashMap;

public class Q2 {
    
    public static void main(String[] args) {
        
    String str = "abc pqr xyz abc pqr xyz lmn ";
    
    HashMap<String, Integer> hash_map = new HashMap<>();
    Integer check;
    String[] words = str.split(" ");
    for (String val : words) {
        check = hash_map.get(val);
        if (check == null){
            hash_map.put(val, 1);
        }else{
            hash_map.put(val, check + 1);
         }
    }
    System.out.println(hash_map);
}
 
}


import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Collectors;

public class Q6 {
    
     public static void main(String[] args) {
         
         String str = "abc lmn pqr abc";
         System.out.println("Entered string:: "+str);
         Map<Character, Long> coll_string_map = str.chars().mapToObj(i -> (char)i).collect(Collectors.groupingBy(Function.identity(), LinkedHashMap::new, Collectors.counting()));
         
         Optional<Character> get_first_repeat = coll_string_map.entrySet().stream().filter( (e) -> e.getValue() > 1).map(e -> e.getKey()).findFirst();
         
         System.out.println("\n first repeated character " + get_first_repeat.orElse(null));


     }
 
}


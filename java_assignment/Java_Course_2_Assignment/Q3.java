import java.util.*;

public class Q3 {
    
    public static void TrimmerString ( List<String> str_input ){
        ListIterator <String> itr = str_input.listIterator();
        while(itr.hasNext()){
            itr.set(itr.next().trim());
        }
    }

    public static void main(String[] args) {
        List<String> list = Arrays.asList(" abc     ", "       pqr ", "           xyz         ");
        System.out.println("Before Trimming");
        for (String str : list) {
            System.out.format("\"%s\"%n", str);
        }
        TrimmerString(list);
        System.out.println("\nAfter Trimming");
        for (String str : list) {
            System.out.format("\"%s\"%n", str);
        }
    }

}

import java.util.*;

public class Q2 {
    
    static final Comparator<String> compare_obj = new Comparator<String>() {
        public int compare(String str1, String str2){
            return str1.compareTo(str2);
        }
    };

    public static void main(String[] args){
        
        SortedSet<String> sorted_set = new TreeSet<String>(compare_obj);
  
        String arr[] = {"ABC","Abc", "abc", "ABC" , "Abc", "abc"};
        
        System.out.println("Size of Array before comparator is "+arr.length);
        System.out.println("Elements are");
        for(String str : arr){
            System.out.print(str+" ");
        }
        System.out.println("");
        for(String str : arr){
            sorted_set.add(str);
        }
        System.out.println("\nSize of new Sorted Set after using comparator is "+sorted_set.size() + "\ndistinct words: " + sorted_set);
    }
}

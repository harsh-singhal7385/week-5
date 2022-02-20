
import java.util.*;
import java.io.*;

public class Q4 {
    
     public static void main(String[] args) {
     String str;
     System.out.print("Enter the string: \n");
     Scanner sc = new Scanner(System.in);
     str = sc.nextLine();
     
     int count;
     
     char[] str_chr = str.toCharArray();
     System.out.print("\nDuplicate characters in given string :: "+str);
     
     for(int i = 0; i <str_chr.length-1; i++) {
        count = 0;
        for(int j = i+1; j <str_chr.length; j++) {
            if(str_chr[i] == str_chr[j] && str_chr[i] != ' ') {
                count++;
                str_chr[j] = '-';
        }
     }
     
     if(count > 0 && str_chr[i] != '-'){
        System.out.print("\n"+str_chr[i]+" ");
     }
   }
     
     }
 
}


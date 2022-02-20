
import java.util.*;

class ProcessData implements Runnable{
    public void run(){
        for(int i=1; i<=5; i++){
        try {
            Thread.sleep(1000);
            System.out.println("ProcessData thread is running -> "+ Thread.currentThread().getName());  
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
    }

}
class FetchData extends Thread{
    public void run(){
        for(int i=1; i<=5; i++){
        try {
            Thread.sleep(500);
            System.out.println("FetchData thread  running ->" + Thread.currentThread().getName());  
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
    }
}

public class Q3 {
    public static void main(String[] args) throws InterruptedException{
        FetchData fetch = new FetchData();
        Thread thread_1 = new Thread(new ProcessData());

        fetch.start();
        
        fetch.join();
        
        thread_1.start();
        
    }
}

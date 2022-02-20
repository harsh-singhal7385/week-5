class Data{
    private String data[] = new String[5];
    static public int count;
    public int i;
     synchronized void writeData(String str){ 
        this.data[count++] = str;
    }
    
     void readData(){ 
        for( i=0;i<count;++i){
            System.out.println(data[i]);
        }   
    }
}  


  
class Writer extends Thread{  
    Data obj;  
    
    Writer(Data obj){  
        this.obj = obj;  
    }  
    
    public void run(){  
        obj.writeData("Welcome to Quantiphi Java zone1...."); 
         obj.writeData("Welcome to Quantiphi Java zone2....");  
          obj.writeData("Welcome to Quantiphi Java zone3....");  
           obj.writeData("Welcome to Quantiphi Java zone4....");  
            obj.writeData("Welcome to Quantiphi Java zone5....");  
    }  
  
}  
class Reader extends Thread{  
    Data obj;  
    Reader(Data obj){  
         this.obj = obj; 
    }  
    public void run(){  
        obj.readData();  
    }  
}  
  
public class Q4 {  
    public static void main(String args[]){
        
    Data obj = new Data(); 
    
    Writer writer = new Writer(obj);  
    Reader reader = new Reader(obj); 
    
    writer.start();  
    reader.start();  
    
    }  
} 

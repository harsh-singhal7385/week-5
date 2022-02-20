class Data{
    
    private String name;
    private int id;

    public void setName(String name){
        this.name = name;
    }
    public void setId(int id){
        this.id = id;
    }

    public String getName(){
        return name;
    }
    public int getId(){
        return id;
    }
}


public class Q2 {
    public static void main(String[] args) { 
        Data data = new Data();
        data.setName("abc xyz");
        data.setId(1);

        System.out.println("Name : "+data.getName()+ "\nID : "+data.getId());
    }
}

package main;

import java.util.Date;

public class Test {
    public static void main(String[] args){
        Date a=new Date()
                ;
        for (int i=0;i<1000000;i++){
            System.out.println(1);
        }
        System.out.println(System.currentTimeMillis()-a.getTime());

    }
}

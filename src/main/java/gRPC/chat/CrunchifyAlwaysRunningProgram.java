package gRPC.chat;

import java.util.Calendar;

public class CrunchifyAlwaysRunningProgram {

    public static void main(String args[]) {

        CrunchifyAlwaysRunningProgram object = new CrunchifyAlwaysRunningProgram();
        object.waitMethod();

    }

    private synchronized void waitMethod() {

        while (true) {
            System.out.println("always running program ==> " + Calendar.getInstance().getTime());
            try {
                this.wait(2000);
            } catch (InterruptedException e) {

                e.printStackTrace();
            }
        }

    }
}
import java.util.Scanner;

class Person {
    public String name;
    public boolean status;
}

class Compute {
    int a, b;

    void checkAndPrint() {
        if (a <= 100) {
            System.out.println("LET'S COMPUTE");
        } else {
            System.out.println("COMPUTATION NOT POSSIBLE");
        }

        System.out.println("Sum: " + (a + b));
        System.out.println("Difference: " + (a - b));
        System.out.println("Product: " + (a * b));

        if (b != 0) {
            System.out.println("Quotient: " + (a / b));
            System.out.println("Remainder: " + (a % b));
        } else {
            System.out.println("CANNOT DIVIDE BY ZERO");
        }
    }
}

public class Main {
    public static void main(String[] args) {

        try (Scanner input = new Scanner(System.in)) {

            Compute c = new Compute();

            System.out.print("ENTER FIRST NUMBER (A): ");
            c.a = input.nextInt();

            System.out.print("ENTER SECOND NUMBER (B): ");
            c.b = input.nextInt();

            c.checkAndPrint();

            Person p = new Person();
            p.name = "Nhalie";
            p.status = true;
            System.out.println(p.name + " IS ACTIVE: " + p.status);
        }
    }
}

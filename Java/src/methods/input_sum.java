package methods;

import java.util.Scanner;

public class input_sum {
    public static void main(String[] args) {
        // sum();
        // int ans = sum2(); // returning sum2()
        // System.out.println(ans);
        // sum3(12, 12); // arguments are 12 & 12
        System.out.println(name("Aman singh"));

    }

    static void sum() {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter the first number : ");
        int number1 = sc.nextInt();
        System.out.println("enter the second numebr : ");
        int number2 = sc.nextInt();
        int sum = number1 + number2;
        System.out.println("added sum is : " + sum);
        sc.close();
    }

    static int sum2() { // here with return type int
        Scanner sc = new Scanner(System.in);
        System.out.println("enter the first number : ");
        int number1 = sc.nextInt();
        System.out.println("enter the second numebr : ");
        int number2 = sc.nextInt();
        int sum = number1 + number2;
        sc.close();
        return sum;
    }

    static int sum3(int a, int b) { // this method with parameters a & b values passed is argument
        int sum = a + b;
        System.out.println("the added value is : " + sum);
        return sum;
    }

    static String name(String uname) { // returning string
        String username = "hello " + uname;
        return username;
    } 

}
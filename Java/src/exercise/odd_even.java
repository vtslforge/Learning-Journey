package exercise;

import java.util.Scanner;

public class odd_even {
    public static void main(String[] args) {
        int num = 11;
        int even = 2;
        if (num % even == 0) {
            System.out.println("number is even");
        } else {
            System.out.println("number is odd");
        }
        Scanner sc = new Scanner(System.in);
        sc.close();
    }
}

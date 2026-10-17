package methods;

import java.util.Scanner;

public class Prime_check {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int value = sc.nextInt();
        if (primeCheck(value)) {
            System.out.println(value + " is a Prime Number.");
        } else {
            System.out.println(value + " is NOT a Prime Number.");
        }
        sc.close();
    }

    static boolean primeCheck(int value) {
        if (value <= 1) {
            return false;
        }
        for (int i = 2; i < value; i++) {
            if (value % i == 0) {
                return false;
            }
        }
        return true;
    }
}
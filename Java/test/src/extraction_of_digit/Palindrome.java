package extraction_of_digit;

public class Palindrome {
    public static void main(String[] args) {
        int input = 1223421;
        int inp = input;

        int reverse = 0;

        while (inp > 0) {
            int store = inp % 10;
            reverse = reverse * 10 + store;
            inp /= 10;
        }

        System.out.println(input == reverse);
    }
}
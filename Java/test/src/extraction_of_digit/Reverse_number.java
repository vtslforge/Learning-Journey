package extraction_of_digit;

public class Reverse_number {
    public static void main(String[] args) {

        int number = 23452;
        int num = number;
        int reverse = 0;

        while (num > 0) {

            int digit = num % 10; // Extract last digit

            reverse = reverse * 10 + digit; // Build reversed number

            num = num / 10; // Remove last digit
        }

        System.out.println("Original Number: " + number);
        System.out.println("Reversed Number: " + reverse);
    }
}
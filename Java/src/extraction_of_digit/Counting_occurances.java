package extraction_of_digit;

public class Counting_occurances {
    public static void main(String[] args) {
        int num = 274572478;
        int n = num;
        int count = 0;
        while (n > 0) {
            int digit = n % 10;
            if (digit == 7) {
                count++;
            }
            n = n / 10;
        }
        System.out.println(count);
    }
}

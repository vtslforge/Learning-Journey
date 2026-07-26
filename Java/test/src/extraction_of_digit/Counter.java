package extraction_of_digit;

public class Counter {
    public static void main(String[] args) {
        int num = 245234234;
        int number  = num;

        int count = 0;
        while (number > 0) {
            count++;
            Math.floor(number = number / 10);
        }
        System.out.println(count);
    }
}
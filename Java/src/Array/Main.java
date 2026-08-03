package Array;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] numbers = { 2, 3, 4, 3, 5, 2, 2, 4 }; // statically sized array auto set the size
        System.out.println(Arrays.toString(numbers));
        // int numbers2[] = new int[7]; // here the size of the array is defined
        // numbers2[8] = 40;   out of bounds for length 7 error 
        String[] srrarray = new String[3];
        System.out.println(srrarray[1]);

        // String stringarray[] = {"aman", "saman", "gaman", "khaman"};
        // System.out.println(stringarray[4]);
        // for (String sarray : stringarray) {
        //     System.out.println(sarray);
        // }

        // for (int num : numbers) {
        //     System.out.println(num);
        // }

        

    }
}

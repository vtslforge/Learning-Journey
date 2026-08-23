package Array;

import java.util.Arrays;

public class Array2d {

    public static void main(String[] args) {
        int[][] arr = {
                { 3, 31, 3 },
                { 5, 1, 3 },
                { 5, 7, 2 }
        };
        System.out.println(Arrays.deepToString(arr));
        // iterating with for loop
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
    }
}

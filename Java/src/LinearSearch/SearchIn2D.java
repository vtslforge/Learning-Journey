package LinearSearch;

import java.util.Arrays;

public class SearchIn2D {
    public static void main(String[] args) {
        int[][] arr = {

                { 12, 15, 18 },
                { 2, 7, 11 },
                { 5, 9, 16 }
        };

        int target = 9;
        int[] ans = searchIn2d(arr, target);

        System.out.println("Printing 2D array with deepToString : " + Arrays.deepToString(arr));
        System.out.println(Arrays.toString(ans));
    }

    // to find the target from the 2d array
    static int[] searchIn2d(int[][] arr, int target) {

        if (arr.length == 0) {
            System.out.println("length of array is 0");
        }

        for (int row = 0; row < arr.length; row++) {
            for (int col = 0; col < arr[row].length; col++) {
                if (arr[row][col] == target) {
                    return new int[] { row, col };
                }
            }
        }

        return new int[] { -1, -1 };
    }
}

package DSA.LinearSearch;

public class Min_num_LinearSearch {
    public static void main(String[] args) {
        int[] arr = { 10, 43, 53, 22, 4, 54, 25 };

        System.out.println("Minimum number: " + findMin(arr));
    }

    static int findMin(int[] arr) {
        // An empty array has no minimum value.
        if (arr.length == 0) {
            return -1;
        }

        // Start by assuming the first element is the smallest.
        int minimum = arr[0];  // assuming 10 is minimum

        // Check every remaining element using linear search.
        for (int index = 1; index < arr.length; index++) {
            // Replace minimum whenever a smaller element is found.
            if (arr[index] < minimum) {
                minimum = arr[index];
            }
        }

        // Return the smallest value found in the array.
        return minimum;
    }
}

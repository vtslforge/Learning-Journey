package DSA.LinearSearch;

public class LinearSearchInRange {
    public static void main(String[] args) {
        int[] arr = { 2, 36, 24, 63, 24, 13, 6, 13, 13, 34 };
        int target = 13;
        System.out.println(LinearSearch(arr, target, 1, 6));

    }

    static int LinearSearch(int[] arr, int target, int start, int end) {
        if (arr.length == 0) {
            return -1;
        }
        for (int i = start; i <= end; i++) {
            int element = arr[i];
            if (element == target) {
                return i;
            }
        }
        return -1;
    }
}

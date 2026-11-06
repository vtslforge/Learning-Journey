package BinarySearch;

public class Core {
    public static void main(String[] args) {
        int[] arr = { 9, 12, 12, 23, 26, 33, 33, 43, 45, 46, 54, 56, 63, 65, 75, 80, 98, 122, 221, 332, 874 };
        int target = 56;

        System.out.println(BinarySearch(arr, target));
    }

    static int BinarySearch(int[] arr, int target) {
        int start = 0;
        int end = arr.length - 1;

        while (start <= end) {

            int mid = start + (end - start) / 2;

            if (target < arr[mid]) {
                end = mid - 1;
            } else if (target > arr[mid]) {
                start = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
}

package DSA.LinearSearch;

public class Find_min_number_in_range {
    public static void main(String[] args) {
        int[] arr = { 12, 45, 34, 76, 10, 14, 35,1 };
        System.out.println(find_min_number_in_range(arr, 2, 7));
    }

    static int find_min_number_in_range(int[] arr, int start, int end) {
        if (arr.length == 0) {
            return -1;
        }
        int min_element = arr[0];
        for (int i = start; i <= end; i++) {

            if (arr[i] < min_element) {
                min_element = arr[i];
            }

        }
        return min_element;

    }

}

/**
 * Logic:
 *
 * 1. Define the range using start and end indexes.
 * Example: start = 2, end = 7
 *
 * 2. Assume the first element of the array is the minimum.
 * min_element = arr[0]
 *
 * 3. Start the loop from the given start index and check each element
 * until the given end index.
 *
 * 4. Compare the current element with min_element.
 *
 * 5. If the current element is smaller, update min_element with
 * the current element.
 *
 * 6. Continue comparing every element with the updated minimum.
 *
 * 7. After the entire range is checked, return min_element.
 */
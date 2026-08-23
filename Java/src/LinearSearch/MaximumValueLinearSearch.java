package LinearSearch;

public class MaximumValueLinearSearch {
    public static void main(String[] args) {

        int[] arr = { 12, 33, 23, 12, 43, 5, 14, 3 };
        System.out.println(Max_num_linearSearch(arr));

    }

    static int Max_num_linearSearch(int[] arr) {

        int max_number = arr[0];
        if (arr.length == 0) {
            return -1;
        }

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max_number) {
                max_number = arr[i];
            }

        }

        return max_number;
    }

}

/**
 * Logic:
 *
 * 1. Assume the first element is the maximum.
 * Example: max_number = 12
 *
 * 2. Start the loop from index 1 because index 0 is already our assumed
 * maximum.
 *
 * 3. For each element:
 * - Compare arr[i] with max_number.
 * - If arr[i] is greater, update max_number with arr[i].
 *
 * 4. Once a new maximum is found, all upcoming elements are compared
 * against this new maximum.
 *
 * 5. Continue until every element has been checked.
 *
 * Example:
 * 12 → max = 12
 * 33 → 33 > 12 → max = 33
 * 23 → 23 > 33 → no change
 * 43 → 43 > 33 → max = 43
 * 5 → 5 > 43 → no change
 *
 * 6. After checking all elements, max_number contains the largest value.
 */
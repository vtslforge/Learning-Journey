// task - to return the element instead of the index
//----------------------------------------------------------------------------------------------------
package DSA.LinearSearch;

public class ReturnElement {
    public static void main(String[] args) {
        int[] arr = { 3, 5, 1, 6, 8, 23, 13, 53 };
        String[] arr2 = { "aman", "arohi", "rohan" };

        String target2 = "rohan";
        int target = 8;

        System.out.println(LinearSearch(target, arr));
        System.out.println(linearSearch2(arr, target));
        System.out.println(LinearSearch3(arr, target));
        System.out.println(LinearSearch4(arr2, target2));

    }

    static int LinearSearch(int target, int[] arr) { // extended version

        if (arr.length == 0) {
            return -1;
        }

        for (int index = 0; index < arr.length; index++) {
            int element = arr[index];
            if (element == target) {
                return element;
            }

        }

        return -1;
    }

    static int linearSearch2(int[] arr, int target) { // simpler version
        if (arr.length == 0) {
            return -1;
        }

        for (int num : arr) {
            if (num == target) {
                return num;
            }
        }

        return -1;
    }

    static boolean LinearSearch3(int[] arr, int target) { // returning in bool
        if (arr.length == 0) {
            return false;
        }

        for (int i : arr) {
            if (i == target) {
                return true;
            }
        }
        return false;
    }

    static String LinearSearch4(String[] arr2, String target2) {
        if (arr2.length == 0) {
            return "Value equals zero";
        }
        for (String i : arr2) {
            if (i == target2) {
                return "Target found : " + i;
            }
        }
        return "not found";
    }
}

// remember this -
// for (int num : arr)

// Equivalent to:for(
// int i = 0;i<arr.length;i++)
// {
// int num = arr[i];
// }
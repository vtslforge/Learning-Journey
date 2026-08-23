package DataStructures.LinearSearch;

public class LinearSearch {
    public static void main(String[] args) {
        int[] arr = { 10, 43, 53, 22, 44, 22, 54, 22, 44, 64, 85, 25, 64, 23, 564, 74, 74 };

        int target = 5364; // this is the target i have to find with linear search
        System.out.println(linearSearch(target, arr));

    }

    static int linearSearch(int target, int[] arr) {
        if (arr.length == 0) { // if length of the array is 0 cause then we didn't need to linear search only
            return -1;
        }

        // now we will run for loop to find the target
        for (int index = 0; index < arr.length; index++) {
            if (arr[index] == target) { // compare with the element stored in the array with the target don't arr ==
                                        // target
                return index;
            }
        }

        return -1;
    }
}

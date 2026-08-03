package Array;

import java.util.Arrays;

public class Array_in_methods {
    public static void main(String[] args) {
        int[] nums = { 2, 3, 4, 2, 4, 42, 2 };
        System.out.println(Arrays.toString(nums));
        changeArrayElement(nums);
        System.out.println(Arrays.toString(nums));
    }

    static void changeArrayElement(int[] nums) {
        nums[0] = 99;
    }
}

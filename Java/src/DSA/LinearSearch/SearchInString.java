package DSA.LinearSearch;

public class SearchInString {
    public static void main(String[] args) {
        String name = "vatsalya";
        char target = 'l';
        System.out.println(LinearSearch(name, target));
    }

    static boolean LinearSearch(String str, char target) {

        if (str.length() == 0) {
            return false;
        }
        for (int i = 0; i < str.length(); i++) {
            if (target == str.charAt(i)) {
                return true;
            }
        }
        // or using for each
        for (char ch : str.toCharArray()) {
            if (ch == target) {
                return true;
            }
        }

        return false;

    }

}

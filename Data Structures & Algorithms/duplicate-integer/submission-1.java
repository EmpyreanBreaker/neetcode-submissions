class Solution {
    public boolean hasDuplicate(int[] nums) {
        HashSet<Integer> dups = new HashSet<>();

        for (int num : nums) {
            dups.add(num);
        }

        if (dups.size() < nums.length) {
            return true;
        }

        return false;
    }
}
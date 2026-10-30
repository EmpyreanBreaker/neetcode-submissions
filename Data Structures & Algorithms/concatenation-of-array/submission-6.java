class Solution {
    public int[] getConcatenation(int[] nums) {
        int s = nums.length;
        int[] ans = new int[s * 2];

        for (int i = 0; i < s; i++) {
            ans[i] = nums[i];
            ans[i + s] = nums[i];
        }

        return ans;
    }
}
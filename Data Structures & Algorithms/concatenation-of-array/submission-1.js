class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = [];
        const s = nums.length;

        for (let i = 0; i < s; i++) {
            ans[i] = nums[i];
            ans[i + s] = nums[i];
        }

        return ans;
    }
}

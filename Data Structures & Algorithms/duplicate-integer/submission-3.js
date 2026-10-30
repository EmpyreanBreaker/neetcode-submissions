class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const dups = new Set();

        for (const num of nums) {
            if (dups.has(num)) {
                return true;
            } else {
                dups.add(num);
            }
        }

        return false;
    }
}

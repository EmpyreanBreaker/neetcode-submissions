class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const counts = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            counts[s.charCodeAt(i) - "a".charCodeAt(0)]++;
            counts[t.charCodeAt(i) - "a".charCodeAt(0)]--;
        }

        for (const num of counts) {
            if (num > 0) {
                return false;
            }
        }

        return true;
    }
}

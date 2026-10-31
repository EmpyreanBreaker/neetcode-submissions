class MyHashSet {
    constructor() {
        this.size = 1009;

        this.buckets = Array.from({ length: this.size }, () => []);
    }

    hash(key) {
        return key % this.size;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (!bucket.includes(key)) {
            bucket.push(key);
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (bucket.indexOf(key) != -1) {
            bucket.splice(bucket.indexOf(key), 1);
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        return bucket.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

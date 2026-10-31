class MyHashSet {
    public static final int SIZE = 1009;
    List<List<Integer>> buckets;

    public MyHashSet() {
        buckets = new ArrayList<>();

        for (int i = 0; i < SIZE; i++) {
            buckets.add(new ArrayList<>());
        }
    }

    public int hash(int key) {
        return key % SIZE;
    }

    public void add(int key) {
        int index = hash(key);
        List<Integer> bucket = buckets.get(index);

        if (!bucket.contains(key)) {
            bucket.add(key);
        }
    }

    public void remove(int key) {
        List<Integer> bucket = buckets.get(hash(key));

        bucket.remove(Integer.valueOf(key));
    }

    public boolean contains(int key) {
        List<Integer> bucket = buckets.get(hash(key));
        return bucket.contains(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet obj = new MyHashSet();
 * obj.add(key);
 * obj.remove(key);
 * boolean param_3 = obj.contains(key);
 */
function gemstones(arr) {
    let common = new Set(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        let current = new Set(arr[i]); 
        let newCommon = new Set();

        for (let ch of common) {
            if (current.has(ch)) {
                newCommon.add(ch);
            }
        }
        common = newCommon; 
    }
    return common.size;
}

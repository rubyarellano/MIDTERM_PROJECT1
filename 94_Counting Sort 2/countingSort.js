function countingSort(arr) {
    let freq = new Array(100).fill(0);

    for (let num of arr) {
        freq[num]++;
    }

    let sorted = [];
    for (let i = 0; i < freq.length; i++) {
        for (let j = 0; j < freq[i]; j++) {
            sorted.push(i);
        }
    }

    return sorted;
}

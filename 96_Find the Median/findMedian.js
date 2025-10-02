function findMedian(arr) {
    arr.sort((a, b) => a - b);

    let middle = Math.floor(arr.length / 2);

    return arr[middle];
}


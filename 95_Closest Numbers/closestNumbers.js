function closestNumbers(arr) {
    arr.sort((a, b) => a - b);

    let minDiff = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < arr.length; i++) {
        let diff = arr[i] - arr[i - 1];
        if (diff < minDiff) {
            minDiff = diff;
        }
    }

    let result = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] === minDiff) {
            result.push(arr[i - 1]);
            result.push(arr[i]);
        }
    }

    return result;
}

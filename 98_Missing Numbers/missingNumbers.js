function missingNumbers(arr, brr) {
    let count = {};

    for (let i = 0; i < brr.length; i++) {
        let num = brr[i];
        if (count[num]) {
            count[num] += 1;
        } else {
            count[num] = 1;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        count[num] -= 1;
    }

    let result = [];
    for (let key in count) {
        if (count[key] > 0) {
            result.push(parseInt(key));
        }
    }

    result.sort(function(a, b) { return a - b; });

    return result;
}
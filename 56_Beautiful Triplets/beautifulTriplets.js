function beautifulTriplets(d, arr) {
    let count = 0;
    let values = new Set(arr);

    for (let num of arr) {
        if (values.has(num + d) && values.has(num + 2 * d)) {
            count++;
        }
    }

    return count;
}

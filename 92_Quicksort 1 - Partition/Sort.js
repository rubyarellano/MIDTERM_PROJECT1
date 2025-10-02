function quickSort(arr) {
    let pivot = arr[0];   
    let left = [];
    let equal = [];
    let right = [];

    for (let num of arr) {
        if (num < pivot) {
            left.push(num);
        } else if (num === pivot) {
            equal.push(num);
        } else {
            right.push(num);
        }
    }

    return [...left, ...equal, ...right];
}


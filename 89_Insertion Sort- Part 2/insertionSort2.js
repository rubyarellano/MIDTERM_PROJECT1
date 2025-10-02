function insertionSort2(n, arr) {
    let result = [];

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;

        result.push(arr.join(" "));
    }

    return result;
}

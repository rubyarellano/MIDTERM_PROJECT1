function insertionSort1(n, arr) {
    let key = arr[n - 1];  
    let i = n - 2;

    while (i >= 0 && arr[i] > key) {
        arr[i + 1] = arr[i]; 
        console.log(arr.join(" "));  
        i--;
    }
    arr[i + 1] = key;
    console.log(arr.join(" "));
}


function bigSorting(unsorted) {
    let n = unsorted.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            let a = unsorted[j];
            let b = unsorted[j + 1];

            if (a.length > b.length || (a.length === b.length && a > b)) {
                
                let temp = unsorted[j];
                unsorted[j] = unsorted[j + 1];
                unsorted[j + 1] = temp;
            }
        }
    }

    return unsorted;
}
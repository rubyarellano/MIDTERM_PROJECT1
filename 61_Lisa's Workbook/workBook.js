function workbook(n, k, arr) {
    let page = 1;        
    let special = 0;   

    for (let i = 0; i < n; i++) {
        let problems = arr[i];

        for (let prob = 1; prob <= problems; prob++) {
            if (prob === page) {
                special++;
            }
            if (prob % k === 0 || prob === problems) {
                page++;
            }
        }
    }

    return special;
}
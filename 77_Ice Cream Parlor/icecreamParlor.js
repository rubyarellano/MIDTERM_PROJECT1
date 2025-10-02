function icecreamParlor(m, arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let price = arr[i];
        let complement = m - price;

        if (map.has(complement)) {
            return [map.get(complement) + 1, i + 1]; 
        }
        map.set(price, i);
    }

    return [];
}

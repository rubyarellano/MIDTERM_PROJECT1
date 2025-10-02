function chocolateFeast(n, c, m) {
        let chocolates = 0;
        let wrappers = 0;
    
    while (n >= c) {
        n = n - c;      
        chocolates = chocolates + 1;
        wrappers = wrappers + 1;
    }
    while (wrappers >= m) {
        let freeChocolates = 0;

        while (wrappers >= m) {
            wrappers = wrappers - m;
            freeChocolates = freeChocolates + 1;
        }
        chocolates = chocolates + freeChocolates;
        wrappers = wrappers + freeChocolates;
    }

    return chocolates;
}


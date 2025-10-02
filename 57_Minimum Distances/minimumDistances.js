function minimumDistances(a) {
    let lastSeen = new Map(); 
    let minDist = Infinity;   

    for (let i = 0; i < a.length; i++) {
        if (lastSeen.has(a[i])) {
            let dist = i - lastSeen.get(a[i]); 
            if (dist < minDist) {
                minDist = dist;
            }
        }
        lastSeen.set(a[i], i); 
    }
    return minDist === Infinity ? -1 : minDist;
}


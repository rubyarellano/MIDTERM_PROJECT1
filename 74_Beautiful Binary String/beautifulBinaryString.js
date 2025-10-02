function beautifulBinaryString(b) {
    let changes = 0;
    let i = 0;

    while (i < b.length - 2) {
        if (b[i] === '0' && b[i+1] === '1' && b[i+2] === '0') {
            changes++;     
            i += 3;       
        } else {
            i++;
        }
    }

    return changes;
}

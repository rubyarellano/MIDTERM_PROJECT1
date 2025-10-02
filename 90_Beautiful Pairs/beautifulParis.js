function beautifulPairs(A, B) {
    let count = 0;
    let used = new Array(B.length).fill(false);

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (!used[j] && A[i] === B[j]) {
                count++;
                used[j] = true; 
                break;
            }
        }
    }
    if (count === A.length) {
        return count - 1;
    } else {
        return count + 1;
    }
}
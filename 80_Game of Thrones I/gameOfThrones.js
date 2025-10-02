function gameOfThrones(s) {
    let count = {};

    for (let char of s) {
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }

    let oddCount = 0;
    for (let char in count) {
        if (count[char] % 2 !== 0) {
            oddCount++;
        }
    }
    if (oddCount > 1) {
        return "NO";
    } else {
        return "YES";
    }
}

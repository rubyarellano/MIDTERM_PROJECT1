function twoStrings(s1, s2) {
    let chars = new Set();

    for (let char of s1) {
        chars.add(char);
    }
    for (let char of s2) {
        if (chars.has(char)) {
            return "YES";
        }
    }
    return "NO";
}

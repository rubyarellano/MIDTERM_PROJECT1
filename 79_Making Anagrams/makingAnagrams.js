function makingAnagrams(s1, s2) {
    let count1 = {};

    for (let char of s1) {
        if (count1[char]) {
            count1[char]++;
        } else {
            count1[char] = 1;
        }
    }

    let count2 = {};
    for (let char of s2) {
        if (count2[char]) {
            count2[char]++;
        } else {
            count2[char] = 1;
        }
    }
    
    let deletions = 0;
    let allChars = new Set([...s1, ...s2]);

    for (let char of allChars) {
        let c1 = count1[char] || 0;
        let c2 = count2[char] || 0;
        deletions += Math.abs(c1 - c2);
    }

    return deletions;
}
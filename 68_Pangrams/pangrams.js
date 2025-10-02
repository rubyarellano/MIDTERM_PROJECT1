function pangrams(s) {
    s = s.toLowerCase();        
    let letters = new Set();    

    for (let char of s) {
        if (char >= 'a' && char <= 'z') {
            letters.add(char);
        }
    }
    if (letters.size === 26) {
        return "pangram";
    } else {
        return "not pangram";
    }
}

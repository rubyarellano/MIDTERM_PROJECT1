function alternate(s) {
    let uniqueChars = [];
    for (let i = 0; i < s.length; i++) {
        if (!uniqueChars.includes(s[i])) {
            uniqueChars.push(s[i]);
        }
    }

    let maxLength = 0;
    for (let i = 0; i < uniqueChars.length; i++) {
        for (let j = i + 1; j < uniqueChars.length; j++) {
            let char1 = uniqueChars[i];
            let char2 = uniqueChars[j];

            let filtered = "";
            for (let k = 0; k < s.length; k++) {
                if (s[k] === char1 || s[k] === char2) {
                    filtered += s[k];
                }
            }
            if (isAlternating(filtered)) {
                if (filtered.length > maxLength) {
                    maxLength = filtered.length;
                }
            }
        }
    }

    return maxLength;
}

function isAlternating(str) {
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            return false; 
        }
    }
    return true;
}
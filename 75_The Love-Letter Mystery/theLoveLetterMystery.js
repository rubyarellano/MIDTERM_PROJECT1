function theLoveLetterMystery(s) {
    let operations = 0;
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        let leftChar = s.charCodeAt(left);
        let rightChar = s.charCodeAt(right);

        operations += Math.abs(leftChar - rightChar);

        left++;
        right--;
    }
    return operations;
}

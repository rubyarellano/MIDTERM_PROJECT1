function palindromeIndex(s) {
    let n = s.length;

    function isPalindrome(str) {
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    for (let i = 0; i < Math.floor(n / 2); i++) {
        if (s[i] !== s[n - 1 - i]) {
            if (isPalindrome(s.slice(0, i) + s.slice(i + 1))) {
                return i;
            } else if (isPalindrome(s.slice(0, n - 1 - i) + s.slice(n - i))) {
                return n - 1 - i;
            } else {
                return -1; 
            }
        }
    }

    return -1;
}
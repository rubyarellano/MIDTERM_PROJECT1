function separateNumbers(s) {
    let n = s.length;

    for (let len = 1; len <= n / 2; len++) {
        let firstNum = BigInt(s.substring(0, len)); 
        let current = firstNum;
        let built = "";

        while (built.length < n) {
            built += current.toString();
            current++;
        }
        if (built === s) {
            console.log("YES " + firstNum);
            return;
        }
    }
    console.log("NO");
}

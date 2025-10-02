function kaprekarNumbers(p, q) {
    let results = [];

    for (let n = p; n <= q; n++) {
        let square = BigInt(n) * BigInt(n);  
        let strSq = square.toString();
        let d = n.toString().length;

        let right = strSq.slice(-d); 
        let left = strSq.slice(0, strSq.length - d);

        let leftNum = left === "" ? 0 : parseInt(left, 10);
        let rightNum = right === "" ? 0 : parseInt(right, 10);

        if (leftNum + rightNum === n) {
            results.push(n);
        }
    }

    if (results.length > 0) {
        console.log(results.join(" "));
    } else {
        console.log("INVALID RANGE");
    }
}

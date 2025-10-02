function minimumNumber(n, password) {
    let numbers = "0123456789";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let specialChars = "!@#$%^&*()-+";

    let need = 0;

    if (!/[0-9]/.test(password)) {
        need++;
    }
    if (!/[a-z]/.test(password)) {
        need++;
    }
    if (!/[A-Z]/.test(password)) {
        need++;
    }
    if (!/[!@#$%^&*()\-+]/.test(password)) {
        need++;
    }
    
    let totalNeeded = Math.max(need, 6 - n);

    return totalNeeded;
}

function howManyGames(p, d, m, s) {
    let count = 0; 
    let cost = p;    
    let money = s; 

    while (money >= cost) {
        money -= cost;  
        count++;

        cost = Math.max(cost - d, m);
    }

    return count;
}
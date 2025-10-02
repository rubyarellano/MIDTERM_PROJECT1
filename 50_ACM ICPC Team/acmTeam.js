function acmTeam(topic) {
    let n = topic.length;     
    let m = topic[0].length;   
    let maxTopics = 0;
    let teamCount = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let known = 0;

            for (let k = 0; k < m; k++) {
                if (topic[i][k] === '1' || topic[j][k] === '1') {
                    known++;
                }
            }

            if (known > maxTopics) {
                maxTopics = known;
                teamCount = 1;
            } else if (known === maxTopics) {
                teamCount++;
            }
        }
    }

    return [maxTopics, teamCount];
}

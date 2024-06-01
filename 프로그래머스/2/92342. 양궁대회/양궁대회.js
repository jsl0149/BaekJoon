function solution(n, info) {
    let answer = [];

    const data = new Array(11).fill(0);

    let maxScoreGap = 0;

    const dfs = (depth, acc) => {

        if(acc >=n) {
            const score = getScore(info, data);
            if(maxScoreGap <= score){
                if(score === maxScoreGap){                 
                    if(getMin(answer, data)) answer = data.slice(0);
                }
                else answer = data.slice(0);
                maxScoreGap = score;
            }
            return;
        }

        if(depth > 10){
            return;
        }

        data[depth]++;
        dfs(depth, acc+1);
        dfs(depth+1, acc+1);
        data[depth]--;
        dfs(depth+1, acc)
        return;
    }

    dfs(0, 0);

    return answer.length ? answer : [-1];
}

function getScore(a, b){

    let scoreA = 0;
    let scoreB = 0;
    for(let i = 0; i<11;i++){
        if(a[i] === 0 && b[i] === 0) continue;

        if(a[i] < b[i]) scoreB += (10-i);

        if(a[i] >= b[i]) scoreA += (10-i);
    }

    return scoreB - scoreA;   
}

function getMin(a,b){

    for(let i = 10; i>=0; i--){
        if(a[i] !== b[i]) {
            const max = Math.max(a[i], b[i]);
            if(max === b[i]) return true;

            if(max === a[i]) return false;
        }
    }

    return false;
}
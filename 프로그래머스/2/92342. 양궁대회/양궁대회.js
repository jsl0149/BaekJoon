

function solution(n, info) {
    var answer = [];
    
    const data = new Array(11).fill(0);
   
    let maxScoreGap = 0;
    
    const dfs = (depth, acc) => {
        
        if(depth > 10){
            return;
        }
        
        if(acc >= n) {
            const score = getScore(info, data);
            if(maxScoreGap <= score){
                maxScoreGap = score;
                answer = data.slice(0);
            }
            return;
        }
        
        data[depth]++;
        dfs(depth+1, acc+1);
        dfs(depth, acc+1);
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

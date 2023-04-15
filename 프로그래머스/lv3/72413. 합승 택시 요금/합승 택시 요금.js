function solution(n, s, a, b, fares) {
    var answer = 0;
    
    const dist = new Array(n+1).fill(0).map(()=> new Array(n+1));
    
    fares.forEach((val)=>{
        const [from,to,cost] = val;
        dist[from][to] = cost;
        dist[to][from] = cost;
    })
    
    for(let i = 1; i<=n;i++){
        for(let j = 1; j<=n;j++){
            if(i===j) {
                dist[i][j] = 0;
                continue;
            }
            !dist[i][j] ? dist[i][j] = Infinity : null;
        }
    }
 
    
    for(let k = 1; k<=n; k++){
        for(let i = 1; i<=n; i++){
            for(let j = 1; j<=n; j++){
                const curDist = dist[i][j];
                const newDist = dist[i][k] + dist[k][j];
                newDist < curDist ? dist[i][j] = newDist : null;
            }
        }
    }
    
    answer = dist[s][a] + dist[s][b];
    
    for(let i = 1; i<=n; i++){
        const shortest = dist[s][i] + dist[i][a] + dist[i][b];
        answer = Math.min(shortest,answer);
    }

    
    return answer;
}
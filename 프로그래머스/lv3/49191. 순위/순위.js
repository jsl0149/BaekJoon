function solution(n, results) {
    var answer = 0;
    
    const dp = new Array(n+1).fill(0).map(()=>new Array(n+1).fill(0));
    
    const graph = new Array(n+1).fill(0).map(()=> []);
    
    results.forEach((val)=>{
        const [from,to] = val;
        dp[from][to] = 1;
    })
  
    for(let k = 1; k<=n; k++){
        for(let i = 1; i<=n; i++){
            for(let j = 1; j<=n; j++){
                dp[i][k] && dp[k][j] ? dp[i][j] = 1 : null;
            }
        }
    }
    
    const able = new Array(n+1).fill(0);
    
    for(let i = 1; i<=n;i++){
        for(let j = 1; j<=n;j++){
            able[i] += dp[i][j];
            able[j] += dp[i][j];
        }
    }
        
    answer = able.filter((val)=>val === n-1).length;
    
    return answer;
}
function solution(triangle) {
    var answer = 0;   
    const N = triangle.length;
    const dp = triangle.slice(0);

    for(let i = 1; i<N;i++){
        for(let j = 0; j<dp[i].length;j++){
            const left = j-1;
            const right = j;
            dp[i][j] = triangle[i][j];
            if(left < 0){
                dp[i][j] += dp[i-1][right];
                continue;
            }
            
            if(right >= i){
                dp[i][j] += dp[i-1][left];
                continue;
            }
            dp[i][j] += Math.max(dp[i-1][left], dp[i-1][right]);
        }
    }

    
    return Math.max.apply(null, dp[dp.length-1]);
}
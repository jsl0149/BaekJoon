function solution(n, money) {
    const dp = new Array(n+1).fill(0);
    dp[0] = 1;
    money.forEach((val)=>{
        for(let i = val; i<=n; i++){
            dp[i] += dp[i-val];
        }
    })
    return dp[n] % 1000000007;
    
}
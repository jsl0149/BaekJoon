function solution(n, tops) {
    var answer = 0;
    
    const dp = new Array(2*n+2).fill(0);
    
    if(tops[0]){
        dp[1] = 1;
        dp[2] = 3;
    }
    
    else{
        dp[1] = 1;
        dp[2] = 2;
    }
    
    for(let i = 3; i<=2*n+1;i++){
        if(i%2===0){
            const idx = i/2 - 1;
            if(tops[idx]) dp[i] = (dp[i-1] * 2 + dp[i-2]) % 10007;
            else dp[i] = (dp[i-1] + dp[i-2]) % 10007;
        }
        else dp[i] = (dp[i-1] + dp[i-2]) % 10007;
    }
    return (dp[2*n+1]);
}
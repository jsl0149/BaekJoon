function solution(land) {
    var answer = 0;
    
    const dp = [land[0]];
    
    for(let i = 1; i<land.length; i++){
        const curArr = [];
        for(let j = 0; j<4;j++){
            const temp = [...dp[i-1].slice(0,j), ...dp[i-1].slice(j+1,4)];
            const curMax = Math.max.apply(null, temp);
            curArr.push(land[i][j] + curMax);
        }
        dp.push(curArr);
    }

    return Math.max.apply(null, dp[dp.length-1]);
}
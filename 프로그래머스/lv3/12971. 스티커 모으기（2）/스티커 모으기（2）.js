function solution(sticker) {
    var answer = 0;

    const len = sticker.length + 2;
    const dp1 = new Array(len).fill(0);
    const dp2 = new Array(len).fill(0);
    
    if(sticker.length === 1) return sticker[0];
    
    for(let i = 2; i<len-1;i++){
        dp1[i] = Math.max(dp1[i-1], dp1[i-2] + sticker[i-2]);
    }
    
    for(let i = 3; i<len; i++){
        dp2[i] = Math.max(dp2[i-1], dp2[i-2] + sticker[i-2]);
    }
    
    answer = Math.max(Math.max.apply(null, dp1), Math.max.apply(null, dp2));
    
    

    return answer;
}
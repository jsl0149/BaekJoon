function solution(sequence) {
    const dp1 = new Array(sequence.length);
    const dp2 = new Array(sequence.length);
    
    let bit = 1;
    
    dp1[0] = bit * sequence[0];
    
    for(let i = 1; i<sequence.length;i++){
        bit *= -1;
        const cur = sequence[i] * bit;
        dp1[i] = dp1[i-1] > 0 ? dp1[i-1] + cur : cur;
    }
    
    bit = -1;
    dp2[0] = bit * sequence[0];
    
    for(let i = 1; i<sequence.length;i++){
        bit *= -1;
        const cur = sequence[i] * bit;
        dp2[i] = dp2[i-1] > 0 ? dp2[i-1] + cur : cur;
    }
    
    let max1 = 0;
    let max2 = 0;
    
    dp1.forEach((val)=>{
        val > max1 ? max1 = val : null;
    })
        
    dp2.forEach((val)=>{
        val > max2 ? max2 = val : null;
    })      
    
    return Math.max(max1,max2);
}
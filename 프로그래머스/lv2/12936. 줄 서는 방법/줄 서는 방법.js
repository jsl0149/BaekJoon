function solution(n, k) {
    let num = [];
   
    for(let i = 1; i<=n;i++) num.push(i);
    
 
    const factorial = [1];
    
    for(let i = 1; i<=20;i++) factorial[i] = factorial[i-1] * i;
    
    let idx = k-1;
    let total = n-1;
    
    let answer = [];
    
    while(answer.length < n){
        const fact = factorial[total]
        const cur = Math.floor(idx / fact);
        answer.push(num[cur]);
        num.splice(cur,1);
        idx = idx % factorial[total--]; 
    }
    

    return answer;
}
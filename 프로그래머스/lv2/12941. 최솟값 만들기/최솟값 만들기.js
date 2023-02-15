function solution(A,B){
    var answer = 0;

    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a);
    
    let sum1 = 0;
    let sum2 = 0;
    
    for(let i = 0; i<A.length; i++) sum1 += A[i] * B[i];
    
    A.sort((a,b)=>b-a);
    B.sort((a,b)=>a-b);
    
    for(let i = 0; i<A.length; i++) sum2 += A[i] * B[i];
    
    answer = Math.min(sum1,sum2);
    
    return answer;
}
function solution(A,B){
    var answer = 0;

    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a);
    
    let sum1 = 0;
    
    for(let i = 0; i<A.length; i++) sum1 += A[i] * B[i];
    
    return sum1;
}
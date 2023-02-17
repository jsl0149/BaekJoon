function solution(A, B) {
    var answer = 0;
    A.sort((a,b)=>b-a);
    B.sort((a,b)=>b-a);
    
    let cur = 0;
    
    for(let i = 0; i<B.length;i++){
        while(cur < A.length){
            if(B[i] > A[cur++]){
                answer++;
                break;
            }
        }
            
    }
    
    return answer;
}
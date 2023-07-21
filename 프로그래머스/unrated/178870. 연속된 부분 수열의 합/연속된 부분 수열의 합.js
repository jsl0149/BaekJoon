function solution(sequence, k) {
    var answer = [];
    const N = sequence.length;
    let low = 0, high = 0;
    const arr = [];
    let cur = 0;
    
    while(high <= N){
        
        if(cur < k){
            cur += sequence[high++];
        }
        else if(cur >=k){
            cur -= sequence[low++];
        }
        
        if(cur === k){
            arr.push([low, high-1]);
        }
    }

    let min = Infinity;
    
    arr.forEach((val)=>{
        const [a,b] = val;
        if(b-a < min){
            min = b-a;
            answer = [a,b];     
        }
    })
    
    return answer;
}
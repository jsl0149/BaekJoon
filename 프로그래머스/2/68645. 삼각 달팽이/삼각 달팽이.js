function solution(n) {
    let answer = [];
    
    const arr = new Array(n).fill(0).map((val, idx)=>new Array(idx+1));
    
    let curR = -1;
    let curC = 0;
    let count = 0;
    
    while(n > 0){
        for(let i = 0; i<n;i++){
            curR++
            count++;
            arr[curR][curC] = count;            
        }
        
        for(let i = 0; i<n-1; i++){
            curC++;
            count++;
            arr[curR][curC] = count;
        }
        
        for(let i =0 ;i<n-2;i++){
            curR--;
            curC--;
            count++
            arr[curR][curC] = count;
        }
        n-=3;
    }
    
    arr.forEach((val)=>{
        answer = [...answer, ...val];
    })
    
    
    return answer;
}
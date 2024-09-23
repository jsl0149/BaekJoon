function solution(diffs, times, limit) {
    let answer = 0;
    let level = 1000000000;
    const N = diffs.length;
    
    const binarySearch = (start, end) => {
        
        if(start > end) return;
        
        let sum = times[0];
        
        const mid = Math.ceil((start + end) / 2);

        for(let i = 1; i<N;i++){
            if(diffs[i] <= mid) sum += times[i];
            else{
                const repeatTime = diffs[i] - mid;
                const weight = (times[i-1] + times[i]) * repeatTime;
                sum += (weight + times[i]); 
            }
        }
        
        if(sum <= limit){
            answer = mid;
            binarySearch(start, mid-1);
        }
    
        else binarySearch(mid+1, end);
        
    }
    
    binarySearch(1, level);
    
    
    return answer;
}



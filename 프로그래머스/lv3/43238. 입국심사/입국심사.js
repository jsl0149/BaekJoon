function solution(n, times) {
    var answer = 0;
    
    
    const binarySearch = (start, end) => {
        
        if(start > end) return;
        
        const middle =  parseInt((start + end) / 2);
        
        let total = 0;
        
        times.forEach((val)=>{
            total += parseInt(middle / val);
        })
        
        if(total >= n){
            answer = middle;
            binarySearch(start, middle-1);
        }
        
        else if(total < n){
            binarySearch(middle+1, end);
        }
        
    }
    
    
    const max = 1000000000 *1000000000;
    
    binarySearch(0,max);
    
    
    
    return answer;
    
    
   
    
    
}
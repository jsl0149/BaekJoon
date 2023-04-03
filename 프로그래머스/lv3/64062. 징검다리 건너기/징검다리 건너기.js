function solution(stones, k) {
    var answer = 0;
    
    const binary = (arr, k, min, max) => {
        
        if(min === max) {
            return min;
        }
        
        let mid = Math.round((min + max) / 2);
        let count = 0;
        
        for(let i = 0; i<arr.length;i++){
            if(count === k) break;
            const value = arr[i] - mid + 1;
            value <= 0 ? count++ : count = 0;
        }
        
        if(count === k){
            return binary(arr, k, min, mid-1);
        }
        
        else{
            return binary(arr, k, mid, max);
        }
        
    }
    
    return binary(stones, k, 1, 200000000);
}
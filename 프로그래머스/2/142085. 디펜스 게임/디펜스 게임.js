function solution(n, k, enemy) {
    var answer = 0;
    
    const BinarySearch = (start, end) => {
        
        if(start > end) return;
        
        const mid = Math.floor((start + end) / 2);
        const cur = enemy.slice(0, mid).sort((a,b)=>b-a);
        
        let temp = 0;
        let flag = true;
        
        for(let i = k; i<cur.length;i++){
            temp += cur[i];
            if(temp > n) flag = false;
        }
        
        if(flag){
            answer = mid;
            BinarySearch(mid+1, end);
        }
        
        else{
            BinarySearch(start, mid-1);
        }
    } 
    
    BinarySearch(0, enemy.length);
    
    return answer;
}
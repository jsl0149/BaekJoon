function solution(cap, n, deliveries, pickups) {
    var answer = 0;
    
    let d_cap = 0;
    let p_cap = 0;
    
    for(let i = n-1; i>=0 ;i--){
        d_cap += deliveries[i];
        p_cap += pickups[i];
        
        while(d_cap > 0 || p_cap > 0){
            d_cap -= cap;
            p_cap -= cap;
            answer += (i+1) * 2 ;
        }
        
    }
    
    return answer;
}
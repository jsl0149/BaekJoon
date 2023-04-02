function solution(gems) {
    var answer = [];
    
    const gemLen = new Set(gems).size;
    const gemMap = new Map();
    let dist = 1000000;
    
    gems.forEach((gem, i)=> {
        gemMap.delete(gem);
        gemMap.set(gem, i+1);
        
        if(gemMap.size === gemLen){
            const head = gemMap.values().next().value;
            const tail = i+1;
            const curDist = tail - head;
            
            if(curDist < dist){
                answer = [head, tail];
                dist = curDist;
            }
            
            
        }
        
    })
    
    
 
    return answer;
}
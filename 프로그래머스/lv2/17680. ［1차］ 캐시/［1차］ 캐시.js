function solution(cacheSize, cities) {
    var answer = 0;
    const cache = new Map();
    
    cities.forEach((val, idx)=>{
        
        const target = val.toUpperCase();
        
        if(cache.get(target) !== undefined){
            cache.set(target, idx);
            answer++;
        }
        else{
           if(cache.size >= cacheSize){
                const LRUTarget = [...cache.entries()].reduce((a,b)=>a[1] < b[1] ? a : b, 0)[0];
                cache.delete(LRUTarget);
           }
            
           if(cache.size < cacheSize) cache.set(target, idx); 
            
         
           answer+=5;
        }
    })
    return answer;
}
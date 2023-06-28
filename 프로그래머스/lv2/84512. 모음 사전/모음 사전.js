function solution(word) {
    var answer = 0;
    
    const arr = ['A', 'E', 'I', 'O', 'U'];
    
    let depth = 1;
    
    const dfs = (alpha) => {
    
        if(alpha === word){
            answer = depth;
            return;
        }
        
       if(alpha.length >= 5) return;
        
        arr.forEach((val)=>{
            depth+=1;
            dfs(alpha + val);
        })
        
        return;
    
    }
    
    
    arr.forEach((val)=>{
        dfs(val);
        depth+=1;
    })
    
    return answer;
    
    
}

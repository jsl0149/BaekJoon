function solution(skill, skill_trees) {
    var answer = 0;
    
    
    const check = (a,b) => {
        
        for(let i = 0; i<b.length;i++){
            if(a[i] !== b[i]) return 0;
        }
        
        return 1;
        
    }
    
    
    skill_trees.forEach((val)=>{
        
        let temp = '';
        
        for(let i = 0; i<val.length;i++){
            for(let j = 0; j<skill.length; j++){
                if(skill[j].includes(val[i])) temp += val[i];
            }
        }
        
        answer += check(skill, temp);
        
    })
    
    
    
    return answer;
}
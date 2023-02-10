function solution(s){
    var answer = true;
    
    const stack = [];


    for(let i = 0; i<s.length;i++){
        if(s[i] === '(') stack.push('(');
        
        else{
            if(stack[stack.length-1] === '(') stack.pop();
            else return false;
        }
    }
    
    if(stack.length) return false;
    
    return true;
    
    
}
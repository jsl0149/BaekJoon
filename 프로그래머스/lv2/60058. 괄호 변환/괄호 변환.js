function solution(p) {
    var answer = '';
    
    const correct = (w)=>{
        const stack = [];
        for(let i = 0; i<w.length;i++){
            if(w[i] ==='(') stack.push(w[i]);
            else stack.pop();
        }        
        return stack.length === 0
    }
    
    const reverse = (target) => {
        let temp = target.slice(1);
        temp = temp.slice(0,temp.length-1);
        const newStr = [];
        for(let i = 0; i<temp.length;i++){
            if(temp[i] ==='(') newStr.push(')');
            else newStr.push('(');
        }
        return newStr.join('');
    }
    
    const recursive = (w) => {
        
        if(w.length === 0) return '';
        
        let count = 0;
        let c1 = 0;
        
        for(let i = 0; i<w.length;i++){
            if(w[i] === '(') c1++;
            else c1--;
            count++;
            if(c1 === 0) break;
        }
        
        const u = w.slice(0,count);
        const v = w.slice(count);
        
        if(correct(u)) return u + recursive(v);
        
        return '(' + recursive(v) + ')' + reverse(u);
        
    }
    
    return recursive(p);
}
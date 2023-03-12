function solution(s) {
    var answer = 0;
    let stack = [];
    const obj = {'(' : ')', '[' : ']', '{' : '}'};
    
    const str = [...s];
    
    for(let i = 0; i<s.length;i++){
        
        if(str[0] !== '(' && str[0] !== '[' && str[0] !== '{'){
            str.push(str.shift());
            continue;
        }
        
        let flag = true;
        
        for(let j = 0; j<str.length; j++){
            if(str[j] === '(' ||str[j] === '[' ||str[j] === '{'){
                stack.push(str[j]);
            }
            else if(stack.length === 0 && str[0] !== '(' && str[0] !== '[' && str[0] !== '{'){
                flag = false;
                break;
            }
            else{
                const top =stack[stack.length-1];
                if(obj[top] === str[j]) stack.pop();
                else {
                    flag = false;
                    break;
                }
            }
        }
       
        if(flag && stack.length === 0) answer++;
        stack = [];
        str.push(str.shift());
    }
        
    return answer;
}
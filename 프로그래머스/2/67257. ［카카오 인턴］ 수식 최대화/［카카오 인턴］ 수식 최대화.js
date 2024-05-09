function solution(expression) {
    var answer = 0;
    
    const data = expression.split(/([*+-])/);
    
    const operand = [['*', '+', '-'], ['*', '-', '+'], ['+', '*', '-'], ['+', '-', '*'], ['-', '+', '*'], ['-', '*', '+']];
    
    operand.forEach((val)=>{
        let copyData = data.slice();
    
        val.forEach((oper)=>{
            const stack = [];
            
            for(let i = 0; i<copyData.length; i++){
                if(copyData[i] === oper){
                    const prev = parseInt(stack.pop());
                    const next = parseInt(copyData[i+1]);
                    stack.push(calculate(prev,copyData[i],next));
                    i++;
                }
                else{
                    stack.push(copyData[i]);
                }
            }
            copyData = stack.slice();
        })

       answer = Math.max(Math.abs(copyData[0]), answer);
    })
    
    return answer;
}

function calculate(a,oper,b){
    if(oper === '*') return a * b;
    if(oper === '+') return a + b;
    if(oper === '-') return a - b;
}
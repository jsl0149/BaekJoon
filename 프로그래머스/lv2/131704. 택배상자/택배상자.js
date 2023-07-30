function solution(order) {
    var answer = 0;
    let idx = 0;
    
    const stack = [];
    
    for(let i = 1; i<=order.length; i++){
        stack.push(i);
        
        while(stack.length && stack.at(-1) === order[idx]){
            stack.pop();
            idx++;
        }
    }
    
    return idx;
}
function solution(topping) {
    var answer = 0;

    const leftSet = new Map();
    const rightSet = new Map();

    topping.forEach((val)=>{
        const value = rightSet.get(val);
        if(value) rightSet.set(val, value+1);
        else rightSet.set(val,1);
    })

    topping.forEach((val)=>{
        const value = rightSet.get(val);
        if(value === 1) rightSet.delete(val);
        else rightSet.set(val, value-1); 

        const valueLeft = leftSet.get(val);
        if(valueLeft) leftSet.set(val, value+1);
        else leftSet.set(val,1);

        if(leftSet.size === rightSet.size) answer++;

    })


    return answer;
}
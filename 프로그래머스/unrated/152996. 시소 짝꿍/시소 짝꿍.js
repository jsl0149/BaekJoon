function solution(weights) {
    var answer = 0;
    
    const dict = new Map();
    
    weights.sort((a,b)=>a-b);
    
    weights.forEach((val)=>{
        let temp = dict.get(val);
        if(temp) dict.set(val, temp+1);
        else dict.set(val,1);
    })

    weights.forEach((weight)=>{
        const value = dict.get(weight);
        if(value > 1) answer += value - 1
        if(dict.get(weight * (3/2)) > 0) answer += dict.get(weight * (3/2))
        if(dict.get(weight * 2) > 0) answer += dict.get(weight * 2)
        if(dict.get(weight * (4/3)) > 0) answer += dict.get(weight * (4/3))
        dict.set(weight, value-1);
    })
    
    return answer;
}
function solution(want, number, discount) {
    var answer = 0;
    
    const wantMap = new Map();
    const discountMap = new Map();
    
    for(let i = 0; i<want.length;i++){
        wantMap.set(want[i], number[i]);
        discountMap[want[i]] = 0;
    }
    
    const check = () => {
        
        let flag = true;

        for(const [key, value] of wantMap) if(value > discountMap[key]) return false;
        
        return true;
        
    }
    
    for(let i = 0; i<10;i++){
        if(!discountMap[discount[i]]) discountMap[discount[i]] = 1;
        else discountMap[discount[i]]++;
    }
    
    if(check()) answer++;
    
    
    for(let i = 10; i<discount.length; i++){
        discountMap[discount[i-10]]--;
        if(!discountMap[discount[i]]) discountMap[discount[i]] = 1;
        else discountMap[discount[i]]++;
        if(check()) answer++;
    }
    
    
    return answer;
}
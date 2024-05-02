function solution(users, emoticons) {
    let result = [0,0];
    
    const EMOTICONS_NUM = emoticons.length;
    const arr = new Array(emoticons.length).fill(0).map(()=>[]);
    const num = [];
    emoticons.forEach((val,idx)=>{
        for(let i = 1; i<=4;i++) arr[idx].push([val, i*10]);
    })
    
    for(let i = 0; i<4;i++) num.push(i);

    const permu = combination([], num, EMOTICONS_NUM, []);
    
    permu.forEach((val)=>{
        const temp = [];
        
        for(let i = 0; i<EMOTICONS_NUM; i++) temp.push(arr[i][val[i]]);
        
        let signService = 0;
        let totalCost = 0;
        
        users.forEach((val)=>{
            const [sales, maxCost] = val;
            
            let user_totalCost = 0;
            
            temp.forEach((emoticons)=>{
                const [cost, emoticon_sales] = emoticons;
                if(sales <= emoticon_sales) user_totalCost += cost * (1 - 0.01 * emoticon_sales);
            })
            
            if(user_totalCost >= maxCost) signService++;
            else totalCost += user_totalCost;
        })
        
        
        if(signService >= result[0]){
            if(signService === result[0]) result[1] = result[1] <= totalCost ? totalCost : result[1];
            else result[1] = totalCost;
            result[0] = signService;
        }
        
    })

    return result;
}

function combination(arr, num, EMOTICONS_NUM, result){
    
     if(arr.length === EMOTICONS_NUM){
            result.push(arr);
            return;
        }
        
     else{
            for(let i = 0; i<num.length;i++){
                const copy = arr.slice();
                copy.push(num[i]);
                combination(copy, num, EMOTICONS_NUM, result);
            }
        }
    
    return result;
} 
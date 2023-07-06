function solution(orders, course) {
    var answer = [];
    
    const map = new Map();
    
    let combi = [];
    
    const combination = (arr,n,k,order) => {
        if(arr.length === n){
            combi.push(arr);
            return;
        }
        else{
            for(let i =k; i<order.length;i++){
                const temp = arr.slice(0);
                temp.push(order[i]);
                combination(temp, n, i+1, order);
            }
        }
    }
    
    orders.forEach((val)=>{
        const alpha = val.split('');
        alpha.sort();
        course.forEach((val)=>{
            combination([],val,0,alpha);
            combi.forEach((com)=>{
                const key = com.join('');
                const data = map.get(key);
                if(data) map.set(key, data+1);
                else map.set(key,1);
            })
            combi = [];
        })
    })
    
    const validMenu = [];
    
    const maxValues = [];
    
    course.forEach((val)=>{
        let max = 0;
        map.forEach((value, key)=>{
            if(key.length === val){
                max = value > max ? value : max;
            }
        })
        maxValues.push(max);
    })
   

    course.forEach((val,idx)=>{
        let max = 0;
        map.forEach((value, key)=>{
            if(key.length === val && value === maxValues[idx] && maxValues[idx] >= 2){
               answer.push(key);
            }
        })
       
    })
    
    answer.sort();
    
    return answer;
}
function solution(fees, records) {
    var answer = [];
    
    const map = new Map();
    
    const [basicTime, basicFee, unitTime, unitFee] = fees;
    
    records.forEach((val)=>{
        const [time, carNumber, type] = val.split(' ');
        
        if(!map.get(carNumber)){
            map.set(carNumber,[time]);
        }
        else{
            map.get(carNumber).push(time);
        }
    })
    
    map.forEach((val,key)=>{
        if(val.length % 2 === 1) val.push('23:59');
        
        let totalTime = 0;
        
        for(let i = 0; i<val.length;i+=2){
            const [inHour, inMinute] = val[i].split(':').map(Number);
            const [outHour, outMinute] = val[i+1].split(':').map(Number);
            const curTime = outHour * 60 + outMinute - (inHour * 60 + inMinute);
            totalTime+=curTime;
        }
    
        if(totalTime < basicTime) answer.push([key, basicFee]);
        
        else{
            const totalFee = basicFee + Math.ceil((totalTime - basicTime) / unitTime) * unitFee;
            answer.push([key, totalFee]);
        }
    })
    
    answer.sort((a,b)=>a[0] - b[0]);
  
    answer = answer.map((val)=>val[1]);
    
    return answer;
}
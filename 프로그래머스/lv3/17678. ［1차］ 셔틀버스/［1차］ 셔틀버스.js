function solution(n, t, m, timetable) {
    var answer = '';
    
    const getTotalTime = (time)=>{
        const [hour, minute] = time.split(':').map(Number);
        return hour * 60 + minute;
    }
    
    const compare = (a,b)=>{
        const [aHour, aMinute] = a.split(':').map(Number);
        const [bHour, bMinute] = b.split(':').map(Number);
        
        const totalA = aHour * 60 + aMinute;
        const totalB = bHour * 60 + bMinute;
        
        return totalA - totalB;
    }
    
    timetable.sort(compare);
    
    const shuttle = [[9,0]];
    
    for(let i = 1; i<n;i++){
        const hour = Math.floor(t * i / 60)
        const minute = (t * i) % 60;
        shuttle.push([9 + hour, 0 + minute]);
    }
    
    shuttle.forEach((val,idx)=>{
        const [shuttleHour, shuttleMinute] = val;
        const totalShuttleTime = shuttleHour * 60 + shuttleMinute;
        let count = m;
        const start = [];
        while(timetable.length && getTotalTime(timetable[0]) <= totalShuttleTime && count--){
            start.push(timetable.shift())
        }
        
        if(idx === shuttle.length-1){
            
            if(start.length !== m) answer = `${shuttleHour.toString().padStart(2,'0')}:${shuttleMinute.toString().padStart(2,'0')}`;
            
            else{
                const [hour, minute] = start[start.length-1].split(':').map(Number);
                
                if(minute === 0) answer =`${(hour-1).toString().padStart(2,'0')}:59`;
                else answer = `${hour.toString().padStart(2,'0')}:${(minute-1).toString().padStart(2,'0')}`
                
            }
            
        }
        
    })
  
    
    return answer;
} 

/**

1. 시간 순으로 정렬
2. 버스 도착 시간 보다 작거나 같은 도착한 사람 shift
3. 

*/

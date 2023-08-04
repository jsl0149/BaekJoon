function solution(book_time) {
    var answer = 0;
    
    book_time.sort();
    
    const times = [];
    
    book_time.forEach((val)=>{
        const [start,end] = val;
        const [startH, startM] = start.split(':').map(Number);
        const [endH, endM] = end.split(':').map(Number);
        
        const startTime = startH*60 + startM;
        const endTime = endH*60 + endM + 10;
        
        const idx = times.findIndex((e)=> e<=startTime);
        
        if(idx === -1) times.push(endTime);
        else times[idx] = endTime;
        
    })

    return times.length;
}
function solution(k, d) {
    var answer = 0;
    
    const getDist = (x,y) => {
        const x2 = x*x;
        const y2 = y*y;
        return Math.sqrt(x2+y2);
    }
   
    const baseX = [];
    
    let curY = 0;
    
    while(true){
        if(curY <= d) baseX.push([0,curY]);
        else break;
        curY += k;
        answer++;
    }
    
    baseX.forEach((val)=>{
        let [x,y] = val;
        const maxX = Math.floor(Math.sqrt(d*d - y*y)/k);
        answer += maxX;
    })
    
    
    
    return answer;
}
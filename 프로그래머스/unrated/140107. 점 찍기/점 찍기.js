function solution(k, d) {
    var answer = 0;
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
        const maxX = Math.floor(Math.sqrt(d*d - y*y)/k); // Y값을 고정하고 가능한 최대의 X좌표를 계산한 뒤 K로 나누어 가능한 좌표의 개수 계산
        answer += maxX;
    }) 
    
    return answer;
}
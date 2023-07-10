function solution(msg) {
    var answer = [];
    
    const dict = new Map();
    
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    
    alpha.forEach((val,idx)=>{
        dict.set(val,idx+1);
    })
   
    for(let i = 0; i<msg.length;i++){
        let curMsg = msg[i];
        let cursor = 1;
        while(dict.get(curMsg)){
            curMsg += msg[i+cursor++]
        }
        curMsg = curMsg.replace('undefined', 0);
        dict.set(curMsg, dict.size+1);
        i=i+cursor-2;
        answer.push(dict.get(curMsg.slice(0,curMsg.length-1)));
    }
    return answer;
}
    
// K가 있고 KA가 있고 KAO가 없으면 KA를 출력하고 KAO 인덱스 추가
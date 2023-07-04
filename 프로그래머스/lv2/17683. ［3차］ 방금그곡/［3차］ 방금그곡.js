function solution(m, musicinfos) {
    var answer = [0,''];
    
    const splitMelody = (melody) => {
        const codeArr = [];
        for(let i = 0; i<melody.length-1;i++) {
        if(melody[i+1] === '#') codeArr.push(melody[i]+melody[i+1]);
        else if(melody[i] !=='#')codeArr.push(melody[i]);
        }
        
        if(melody[melody.length-1] !== '#') codeArr.push(melody[melody.length-1]);
        return codeArr;
    }
    

    const inputCodeArr = splitMelody(m);
    
    musicinfos.forEach((val)=>{
        const [start, end, title, code] = val.split(',');
        const [startHour, startMinute] = start.split(':');
        const [endHour, endMinute] = end.split(':');
        const playTime = (parseInt(endHour) * 60 + parseInt(endMinute)) - (parseInt(startHour) * 60 + parseInt(startMinute));
        
        let melody = '';
        
        const codeInfoArr = splitMelody(code);
        
        for(let i = 0; i<playTime; i++) melody+=codeInfoArr[i % codeInfoArr.length];
    
        const playedCodeArr = splitMelody(melody);
        
        for(let i = 0; i<playedCodeArr.length;i++){
            let count = 0;
            
            for(let j = 0; j<inputCodeArr.length; j++){
                if(inputCodeArr[j] === playedCodeArr[i+j]) count++;
                else break;
            }
    
            if(count === inputCodeArr.length) {
                const [ansTime, ansTitle] = answer;
                if(ansTime < playTime) answer = [playTime, title];
                break;
            }
        }    
    })
    
    
    return answer[1] ===''? '(None)' : answer[1];
}
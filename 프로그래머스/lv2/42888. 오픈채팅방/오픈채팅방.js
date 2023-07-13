function solution(record) {
    var answer = [];

    const nicknameStore = new Map();
    
    const uid = [];
    
    record.forEach((val)=>{
        const [command, uid, nickname] = val.split(' ');
        if(command === 'Enter') nicknameStore.set(uid, nickname);
        else if(command === 'Change') nicknameStore.set(uid, nickname);
    })
    
    record.forEach((val)=>{
          const [command, uid, nickname] = val.split(' ');
          if(command === 'Enter') answer.push(`${nicknameStore.get(uid)}님이 들어왔습니다.`);
          else if(command === 'Leave') answer.push(`${nicknameStore.get(uid)}님이 나갔습니다.`);
    })
    
    return answer;
}


        
   
     
function solution(s) {
    var answer = '';
    const strArr = s.split(' ');

    const temp = strArr.map((val)=>{
        const data = [...val];
        if(data.length === 0) return '';
        else{
             let changed = `${data[0]?.toUpperCase()}`;
            changed += `${data.slice(1).join('').toLowerCase()}`
            return changed;
        }
  
    });
 
    
    answer = temp.join(' ');
    
    return answer;
}
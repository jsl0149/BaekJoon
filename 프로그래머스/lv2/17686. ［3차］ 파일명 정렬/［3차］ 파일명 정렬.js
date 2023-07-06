function solution(files) {
    var answer = [];
    
    const splitFiles = [];
    
    files.forEach((val)=>{
        
        let head = '';
        let num = '';
        let tail = '';
        
        let headCheck = false;
        let numCheck = false;
        
        for(let i = 0; i<val.length;i++){
        
            if(!parseInt(val[i]) && parseInt(val[i])!==0 && !headCheck) head += val[i];
            
            else if((parseInt(val[i])===0 || parseInt(val[i])) && !numCheck){
                headCheck = true;
                num += val[i];
                if(parseInt(val[i+1]) !== 0 && !parseInt(val[i+1])) numCheck = true;
            }
            
            else if(numCheck && headCheck){
                tail+=val[i];
            }

        }
        
        splitFiles.push([head,num,tail]);
        
    })
    
    const compare = (a,b)=>{
        
        const stringA = a[0].toUpperCase(), stringB = b[0].toUpperCase();
        
        if(stringA < stringB) return -1;
        if(stringA > stringB) return 1;
        
        
        return parseInt(a[1]) - parseInt(b[1]);
        
    }
  
  
    splitFiles.sort(compare);
    
    return splitFiles.map((val)=>val.join(''));
}
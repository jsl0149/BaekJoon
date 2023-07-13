function solution(storey) {
    
    var answer = 0;
    
    while(storey !== 0){
        const str = storey.toString();
        const num = parseInt(str[str.length-1]);
        
        if(num > 5){
            answer += 10 - num;
            storey+= 10 - num;
            storey /= 10;
        }
        
        else if(num === 5){
            
            if(str.length >= 2){
                const num2 = parseInt(str[str.length-2]);
                if(num2 >= 5){
                    answer += 10 - num;
                    storey+= 10 - num;
                    storey /= 10;
                  
                }
                else{
                    answer +=  num;
                    storey -=  num;
                    storey /= 10;
                }
            }
            else{
                answer +=  num;
                storey -=  num;
                storey /= 10;
            }
            
        }
        
        else{
            answer +=  num;
            storey -=  num;
            storey /= 10;
        }
    }
    
    
    return answer;
}


// 2554 -> 2550 4

// 2550 -> 2500 5

// 2500 -> 2000 5

// 2000 -> 0 2

function solution(cards) {
    var answer = [];
    
    // 1번을 열고 남은 경우의 수 체크
    // 2번을 열고 남은 경우의 수 체크 ~~ 이런 식으로 접근해서 완전탐색
    // 방문 배열
    // 방문 배열은 2번의 순회가 끝나면 초기화 시켜줘야함
    
    let visited = new Array(cards.length).fill(false);
    
    for(let i = 0; i<cards.length;i++){
        let firstGroup = 1;
        visited = new Array(cards.length).fill(false);
        visited[i] = true;
        let cursor = cards[i]-1;
        while(!visited[cursor]){
            visited[cursor] = true;
            cursor = cards[cursor]-1;
            firstGroup++;
        }
        
        if(firstGroup === cards.length) return 0;
        
        for(let j = 0; j<cards.length; j++){
            let temp = visited.slice(0);
            if(!temp[j]){
                temp[j] = true;
                let cursor2 = cards[j]-1;
                let secondGroup = 1;
                while(!temp[cursor2]){
                    temp[cursor2] = true;
                    cursor2 = cards[cursor2]-1;
                    secondGroup++;
                }
                answer.push(firstGroup * secondGroup)
            } 
        }
      
        
    }
    
    return Math.max.apply(null,answer);
}
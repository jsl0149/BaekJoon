function solution(s) {
    var answer = Infinity;
    
    const N = s.length; // 문자열의 길이
    
    let arr = []; // 문자열 조각들을 담을 배열
    
    for(let i = 1; i<=Math.ceil(N/2);i++){
        
        arr = [];
        
        for(let j = 0; j<N; j+=i) arr.push(s.slice(j,j+i)); // O(N)
        
        let idx = 0;
        let str = ``;
        while(idx < arr.length){
            let count = 1
            while(arr[idx] === arr[idx+count]) count++;
            if(count !== 1) str+=`${count}${arr[idx]}`;
            else str += arr[idx];
            idx+=count;
        } // O(N)
        
        answer = Math.min(answer, str.length);
    } // O(N/2)
    
    return answer;
}



/** 
문제 특이점 : 반복되는 문자열의 경우 하나를 제외하고 삭제 후 앞에 숫자로 개수 표기, 1은 표기 X, 뒷 부분 잘리면 그대로 붙이기
문제 접근 : 1 ~ N/2개 단위로 문자열을 조각내고 거기서 반복되는 문자열의 개수를 세는 방향으로 접근
시간 복잡도 : O(2N * N/2) = O(N^2)
공간 복잡도 : O(N)
*/




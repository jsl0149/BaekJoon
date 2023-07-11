function solution(s) {
    var answer = Infinity;

    const N = s.length;

    let arr = [];

    for(let i = 1; i<=N;i++){

        arr = [];

        for(let j = 0; j<N; j+=i) arr.push(s.slice(j,j+i));

        let idx = 0;
        let str = ``;
        while(idx < arr.length){
            let count = 1
            while(arr[idx] === arr[idx+count]){
                count++;
            }
            if(count !== 1) str+=`${count}${arr[idx]}`;
            else str += arr[idx];
            idx+=count;
        }

        answer = Math.min(answer, str.length);
    }

    return answer;
}
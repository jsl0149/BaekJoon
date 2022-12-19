const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, S] = input[0].split(' ').map(Number);
const data = input[1].split(' ').map(Number);
let answer = 0;
const ans = [];
const combination = (total,  k, count) => {   

    if(count === N){
        return;
    }

    else{
        for(let i = k; i<data.length;i++){
            if(total+data[i] === S) answer++;
            combination(total + data[i],  i+1, count+1);
        }
    }

}

combination(0, 0, 0);

console.log(answer);
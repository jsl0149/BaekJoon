const { Console } = require('console');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
const data = input.slice(1);
const paper = new Array(N).fill(0).map(()=>new Array(N));
const count = [0,0,0];
const cutPaper= (size, x, y) => {
    const num = paper[x][y];
    let check = 0;
    for(let i =0; i<size;i++){
        let redun = false;
        for(let j =0; j<size;j++){
            if(paper[x][y] === paper[x+i][y+j]){
                check++;
            }
            else {
                redun = true;
                break;
            }
        }
        if(redun) break;
    }

    if(size * size === check) count[num+1]++;

    else{
        let n = size / 3;
        for(let i = 0; i<3;i++){
            for(let j = 0; j<3; j++){
                cutPaper(n, x+i*n, y+j*n)
            }
        }
    }


}

for(let i =0; i<N;i++){
    const temp = data[i].split(' ').map(Number);
    for(let j = 0; j<N; j++){
        paper[i][j] = temp[j];
    }
}

cutPaper(N,0,0);

let answer = "";

count.forEach((val)=>{
    answer += `${val}\n`
})

console.log(answer);
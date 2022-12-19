const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const visited = new Array(300000).fill(0);

const powerCal = (number, power) => {

    let num = 0;

    for(let i = 0; i<number.length; i++){
        num += Math.pow(parseInt(number[i]),power);
    }

    return num.toString();
}

const dfs = (number ,power) => {    
    if(visited[number] === 2) return; 
    visited[number]++;
    const num = powerCal(number, power);
    dfs(num, power);
}

const number = input[0].split(' ')[0];
const power = parseInt(input[0].split(' ')[1]);

dfs(number, power);

const answer = visited.reduce((acc, cur)=>{
    if(cur === 1) return acc+=1;
    else return acc;
},0)

console.log(answer);
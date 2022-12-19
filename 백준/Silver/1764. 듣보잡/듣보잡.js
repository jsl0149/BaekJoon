const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N,M] = input[0].split(' ').map(Number);
const map = new Map();

const data = input.slice(1).map((val)=>val.replace(/(\r\n|\n|\r)/gm, ""));

data.forEach((val)=>{
    if(map.get(val)) map.set(val,map.get(val)+1);

    else map.set(val,1);
})

const answer = []
map.forEach((val,key)=>{
    if(val >= 2) answer.push(key); 
})

answer.sort();

const ans = answer.reduce((acc,cur)=>{
    return `${acc}\n${cur}`
},`${answer.length}`)

console.log(ans);
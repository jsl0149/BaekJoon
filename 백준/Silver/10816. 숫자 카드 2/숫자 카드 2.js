const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const cards = input[1].split(' ').map(Number);
const guess = input[3].split(' ').map(Number);

const map = new Map();

cards.forEach((val)=>{
    if(map.has(val)) map.set(val, map.get(val)+1);
    else map.set(val, 1);
})

let answer = '';

guess.forEach((val)=>{
    if(map.has(val)) answer += `${map.get(val)} `;

    else answer += `0 `;
})

console.log(answer);
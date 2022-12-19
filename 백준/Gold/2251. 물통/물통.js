const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [A, B, C] = input[0].split(' ').map(Number);
const visited = new Map();
let answer = [];
const bfs = () => {

    const queue = [];
    queue.push([0,0,C]);

    while(queue.length){
        const [tA, tB, tC] = queue.shift();
       
        if(visited.get([tA,tB,tC].join(''))) continue;
        visited.set([tA, tB, tC].join(''), true);

        if(tA === 0) answer.push(tC);
        
        // tA > tB
        if(tA + tB > B){
            queue.push([tA + tB - B, B, tC ]);
        } 
        else queue.push([0, tA + tB, tC]);
        //tA > tC
        if(tA + tC > C){
            queue.push([tA + tC - C, tB, C ]);
        } 
        else queue.push([0, tB, tA + tC]);
        //tB > tA
        if(tB + tA > A){
            queue.push([A, tA + tB - A, tC]);
        } 
        else queue.push([tA + tB, 0, tC]);
        //tB > tC
        if(tB + tC > C){
            queue.push([tA, tC + tB - C, C]);
        } 
        else queue.push([tA, 0, tB+tC]);
        //tC > tA
        if(tC + tA > A){
            queue.push([A, tB, tC + tA - A]);
        } 
        else queue.push([tA + tC, tB, 0]);
        //tC > tB
        if(tC + tB > B){
            queue.push([tA, B, tC + tB - B]);
        } 
        else queue.push([tA, tB + tC, 0]);
        
    }

}
bfs();

answer = answer.filter((val,idx,arr)=> arr.indexOf(val) === idx);

answer.sort((a,b)=> a-b);

const ans = answer.reduce((acc, cur)=>{
    return `${acc + cur} `;
},'')

console.log(ans);
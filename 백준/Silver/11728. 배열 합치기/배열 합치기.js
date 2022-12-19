const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr1 = input[1].split(' ').map(Number);
const arr2 = input[2].split(' ').map(Number);
let idx1 = 0;
let idx2 = 0;
let answer = [];

while(true){

    if(idx1 >= arr1.length){
        answer = [...answer, ...arr2.slice(idx2)];
        break;
    }

    else if(idx2 >= arr2.length){
        answer = [...answer, ...arr1.slice(idx1)];
        break;
    }

    if(arr1[idx1] < arr2[idx2]){
        answer.push(arr1[idx1]);
        idx1++
    }

    else{
        answer.push(arr2[idx2]);
        idx2++;
    }

}

let ans = "";

answer.forEach((val)=>{
    ans += `${val} `;
})

console.log(ans);
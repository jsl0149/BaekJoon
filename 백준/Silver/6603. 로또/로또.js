const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = [];
const combination = (arr, str, k, count)=>{

    if(count === 6){
        ans += `${str}\n`;
        return;
    }
    else{
        for(let i = k; i<arr.length;i++){
            combination(arr, `${str}${arr[i]} ` , i+1, count+1);
        }
    }
}

let ans = '';

input.forEach((val)=>{
    if(val[0] != 0){
        const temp = val.split(' ').map(Number).slice(1);
        answer = [];
        combination(temp, '' ,0,0);
        ans += `\n`;
    }
})

console.log(ans);
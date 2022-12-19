const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [L, R] = input[0].split(' ').map((val)=>val.trim());
const str = input[1].split('');
const a = 'q';
const keyboard = {};
const fir = 'qwertyuiop'.split('');
const sec = 'asdfghjkl'.split('');
const thi = 'zxcvbnm'.split('');
const word = [fir,sec,thi];

word.forEach((val,idx)=>{
    val.forEach((char, index)=>{
        keyboard[char] = [idx,index];
    })
})

let leftHand = keyboard[L];
let rightHand = keyboard[R];

let answer = 0;

const taxiDist = (x1, y1, x2, y2) => {
    const x  = x1 - x2 > 0 ? x1 - x2 : x2 - x1;
    const y  = y1 - y2 > 0 ? y1 - y2 : y2 - y1;
    return x + y;
}

str.forEach((char)=>{
    const curPos = keyboard[char];

    if(char === 'b'){
        answer += taxiDist(curPos[0], curPos[1], rightHand[0], rightHand[1]) + 1;
        rightHand = curPos;
    }

    else if(curPos[1] < 5){
        answer += taxiDist(curPos[0], curPos[1], leftHand[0], leftHand[1]) + 1;
        leftHand = curPos;
    }

    else  {
        answer += taxiDist(curPos[0], curPos[1], rightHand[0], rightHand[1]) + 1;
        rightHand = curPos;
    }
})

console.log(answer);
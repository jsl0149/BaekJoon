const { privateEncrypt } = require('crypto');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = parseInt(input[0]);
const isPrime = new Array(N+1).fill(true);
const prime = () => {

    isPrime[0] = false;
    isPrime[1] = false;

    for(let i = 2; i*i<=N;i++){
        
        if(!isPrime[i]) continue;

        for(let j = i*2; j<=N; j+=i) isPrime[j] = false;
    }
}

prime();
const primeArr = [];
isPrime.forEach((val, idx)=>{
    if(val === true) primeArr.push(idx);
})
let lo = 0; let hi = 0; let answer = 0; let sum = 0;

while(true){
    if(sum >= N) sum -= primeArr[lo++];
    else if(hi === primeArr.length) break;
    else sum += primeArr[hi++];
    if(sum === N) answer++;
}

console.log(answer);
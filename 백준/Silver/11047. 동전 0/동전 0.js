const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, MONEY] = input[0].split(' ').map(Number);
const coin = input.slice(1).map(Number);
let count = 0;
let money = MONEY;
for (let i = coin.length - 1; i >= 0; i--) {
  if (money < coin[i]) continue;
  else {
    money = money - coin[i];
    i++;
    count++;
  }

  if (money === 0) {
    break;
  }
}

console.log(count);

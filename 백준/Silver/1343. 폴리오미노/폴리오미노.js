const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let data = input[0];

data = data.replace(/XXXX/g, 'AAAA');
data = data.replace(/XX/g, 'BB');

let answer = data.includes('X') ? -1 : data;

console.log(answer);
// for (let i = 0; i < data.length; i++) {
//   const cur = data[i];

//   if (cur !== '') {
//     if (cur.length === 2) {
//       data[i] = 'BB';
//     } else if (cur.length % 4 === 0) {
//       let temp = '';
//       for (let i = 0; i < cur.length; i++) temp += 'A';
//       data[i] = temp;
//     } else if (cur.length % 4 === 2) {
//       let temp = '';
//       const numA = Math.floor(cur.length / 4);
//       for (let i = 0; i < numA * 4; i++) temp += 'A';
//       temp += 'BB';
//       data[i] = temp;
//     } else {
//       console.log(-1);
//       process.exit(0);
//     }
//   }
// }

// console.log(data.join('.'));

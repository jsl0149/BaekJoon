const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const solution = (_input) => {
    const [N, ...stuff] = _input.map(Number);
    stuff.sort((a, b) => b - a);
    let sum = 0;
    for (let val of stuff) sum += val;

    if (N >= 3) {
      for (let i = 2; i < stuff.length; i += 3) sum -= stuff[i];
    }

    return sum;
  };

  console.log(solution(input));
});

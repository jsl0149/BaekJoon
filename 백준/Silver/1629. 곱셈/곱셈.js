const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const [target, exp, rest] = input[0].split(' ').map(BigInt);

  const power = (base, exponent) => {
    if (exponent === 1n) return base;

    if (exponent % 2n === 0n) {
      const half = power(base, exponent / 2n) % rest;
      return (half * half) % rest;
    }

    if (exponent % 2n === 1n) {
      const half = power(base, (exponent - 1n) / 2n) % rest;

      return (half * half * base) % rest;
    }
  };

  const ans = power(target, exp) % rest;

  console.log(ans.toString());
};

solution(_input);

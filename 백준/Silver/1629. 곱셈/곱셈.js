const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const [target, exp, rest] = input[0].split(' ').map(Number);

  const power = (base, exponent) => {
    if (exponent === 1) return BigInt(base);

    if (exponent % 2 === 0) {
      const half = BigInt(power(BigInt(base), exponent / 2) % BigInt(rest));
      return (BigInt(half) * BigInt(half)) % BigInt(rest);
    }

    if (exponent % 2 === 1) {
      const half = BigInt(
        power(BigInt(base), (exponent - 1) / 2) % BigInt(rest),
      );
      return (BigInt(half) * BigInt(half) * BigInt(base)) % BigInt(rest);
    }
  };

  const ans = BigInt(power(target, exp)) % BigInt(rest);

  console.log(ans.toString());
};

solution(_input);

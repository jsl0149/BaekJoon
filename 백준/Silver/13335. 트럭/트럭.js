const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

class Bridge {
  curWeight = 0;

  constructor(weight) {
    this.arr = Array(weight).fill(0);
  }

  pop() {
    this.curWeight -= this.arr.pop();
  }

  push(car) {
    this.arr.unshift(car);
    this.curWeight += car;
  }
}

const solution = (input) => {
  const [n, w, L] = input[0].split(' ').map(Number);
  const truck = input[1].trim().split(' ').map(Number);
  let head = 0;
  let ans = 0;

  const bridge = new Bridge(w);

  while (head < truck.length || bridge.curWeight > 0) {
    bridge.pop();

    if (truck[head] + bridge.curWeight <= L) {
      bridge.push(truck[head++]);
    } else {
      bridge.push(0);
    }

    ans++;
  }

  console.log(ans);
};

solution(_input);

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const map = [];
const visited = new Array(N).fill(0).map(() => new Array(N).fill(false));
const data = input.slice(1);
const dr = [0, 0, -1, 1];
const dc = [1, -1, 0, 0];

const distance = (a, b) => {
  const [r1, c1] = a;
  const [r2, c2] = b;

  let x = 0;
  let y = 0;

  if (r1 > r2) x = r1 - r2;
  else x = r2 - r1;

  if (c1 > c2) y = c1 - c2;
  else y = c2 - c1;

  return x + y;
};

data.forEach((val) => {
  const row = val.split(' ').map(Number);
  map.push(row);
});

const house = [];
const chicken = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1) {
      house.push([i, j]);
    } else if (map[i][j] === 2) {
      chicken.push([i, j]);
    }
  }
}

const combi = [];
const bucket = [];

for (let i = 0; i < chicken.length; i++) bucket.push(i);

const combination = (arr, k) => {
  if (arr.length === M) {
    combi.push(arr);
    return;
  } else {
    for (let i = k; i < bucket.length; i++) {
      const temp = arr.slice(0);
      temp.push(bucket[i]);
      combination(temp, i + 1);
    }
  }
};

combination([], 0);

let answer = Number.MAX_SAFE_INTEGER;

combi.forEach((val) => {
  const tempChicken = [];
  let total = 0;
  for (let i = 0; i < val.length; i++) tempChicken.push(chicken[val[i]]);

  house.forEach((hou) => {
    let minDist = Number.MAX_SAFE_INTEGER;
    tempChicken.forEach((chi) => {
      minDist = Math.min(minDist, distance(hou, chi));
    });
    total += minDist;
  });

  answer = Math.min(answer, total);
});

console.log(answer);

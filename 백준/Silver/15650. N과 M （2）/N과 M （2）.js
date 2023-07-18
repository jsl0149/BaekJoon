const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = (data) => {
  const [N, M] = data[0].split(" ").map(Number);

  const nums = [];

  for (let i = 1; i <= N; i++) nums.push(i);

  const combi = [];

  const combination = (cur, arr, k, target) => {
    if (cur.length === target) {
      combi.push(cur);
      return;
    } else {
      for (let i = k; i < arr.length; i++) {
        const temp = cur.slice(0);
        temp.push(arr[i]);
        combination(temp, arr, i + 1, target);
      }
    }
  };

  combination([], nums, 0, M);

  let answer = "";

  combi.forEach((val) => {
    answer += `${val.join(" ")}\n`;
  });

  return answer;
};

console.log(solution(input));

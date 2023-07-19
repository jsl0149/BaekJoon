const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = (data) => {
  const [N, M] = data[0].split(" ").map(Number);
  const num = data[1].split(" ").map(Number);
  num.sort((a, b) => a - b);
  let answer = [];

  let output = [];

  let output2 = [];

  const factorial = (cur, depth) => {
    if (depth === M) {
      const temp = output2.slice(0);
      answer.push(temp);
      return;
    } else {
      for (let i = 0; i < cur.length; i++) {
        output2.push(cur[i]);
        const temp = [...cur.slice(0, i), ...cur.slice(i + 1, cur.length)];
        factorial(temp, depth + 1);
        output2.pop();
      }
    }
  };

  const dfs = (start, depth) => {
    if (depth === M) {
      factorial(output, 0);
      return;
    } else {
      for (let i = start; i < num.length; i++) {
        output.push(num[i]);
        dfs(i + 1, depth + 1);
        output.pop();
      }
    }
  };

  dfs(0, 0);

  const compare = (a, b) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) continue;
      return a[i] - b[i];
    }
  };

  answer.sort(compare);
  answer = answer.map((val) => val.join(" "));
  return answer.join("\n");
};

console.log(solution(input));

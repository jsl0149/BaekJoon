const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `./input.txt`;
const _input = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = (input) => {
  const [subin, sister] = input[0].split(" ").map(Number);

  const visited = Array(100001).fill(false);

  const queue = [[subin, 0]];
  let head = 0;
  visited[subin] = true;

  while (head < queue.length) {
    const [curSubin, time] = queue[head++];

    if (curSubin === sister) {
      console.log(time);
      return;
    }

    const left = curSubin - 1;
    const right = curSubin + 1;
    const teleport = curSubin * 2;

    const isValidate = (target) => {
      if (target < 0 || target > 100000) return false;

      return true;
    };

    if (!visited[right] && isValidate(right)) {
      visited[right] = true;
      queue.push([right, time + 1]);
    }

    if (!visited[left] && isValidate(left)) {
      visited[left] = true;
      queue.push([left, time + 1]);
    }

    if (!visited[teleport] && isValidate(teleport)) {
      visited[teleport] = true;
      queue.push([teleport, time + 1]);
    }
  }
};

solution(_input);

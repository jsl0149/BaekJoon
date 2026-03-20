const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const N = Number(input[0]);
  const egg = input.slice(1).map((row) => row.trim().split(' ').map(Number));
  let ans = 0;

  const dfs = (depth) => {
    if (depth === N) {
      let result = 0;

      egg.forEach(([d, _]) => {
        if (d <= 0) result++;
      });

      ans = Math.max(ans, result);
      return;
    }

    // 선택한 계란이 깨져 있으면 다음 depth 진행

    const [d, w] = egg[depth];

    if (d <= 0) return dfs(depth + 1);

    let hit = false;

    for (let i = 0; i < N; i++) {
      const [curD, curW] = egg[i];

      if (i === depth) continue;
      if (curD <= 0) continue;

      hit = true;

      egg[i][0] = curD - w;
      egg[depth][0] = d - curW;
      dfs(depth + 1);
      egg[i][0] = curD;
      egg[depth][0] = d;
    }

    if (!hit) {
      dfs(depth + 1);
    }
  };

  dfs(0);

  console.log(ans);
};

solution(_input);

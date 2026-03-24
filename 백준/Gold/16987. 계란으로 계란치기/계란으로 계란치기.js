const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const _input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
  const N = Number(input[0]);
  const egg = input.slice(1).map((row) => row.trim().split(' ').map(Number));
  let ans = 0;

  const dfs = (depth) => {
    // N에 도달했다는 건 제일 오른쪽 계란을 들고 이 N depth로 진입했다는 것
    if (depth === N) {
      let broken = 0;
      egg.forEach((e) => {
        if (e[0] <= 0) broken++;
      });

      ans = Math.max(ans, broken);
      return;
    }

    let hit = false;

    // 만약 손에 든 계란이 깨졌다면 다음으로 진행 아래 for문을 돌면 안되기 때문에 return 해주기

    if (egg[depth][0] <= 0) {
      return dfs(depth + 1);
    }

    // 깨지지 않은 계란 선택해서 깨주기
    for (let i = 0; i < egg.length; i++) {
      if (depth === i) continue;

      if (egg[i][0] > 0) {
        hit = true;
        egg[i][0] -= egg[depth][1];
        egg[depth][0] -= egg[i][1];
        dfs(depth + 1);
        egg[i][0] += egg[depth][1];
        egg[depth][0] += egg[i][1];
      }
    }

    // 만약 아무것도 깨뜨리지 못했다면 다음 진행

    if (hit === false) {
      dfs(depth + 1);
    }
  };

  dfs(0);

  console.log(ans);
};

solution(_input);

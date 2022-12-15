const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const solution = (_input) => {
  const N = parseInt(_input[0]);

  const map = _input.slice(1);

  let maze = [];

  const check = () => {
    let h = 0;
    let t = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (maze[i][j] == 'H') h++;
        else t++;
      }
    }

    if (h == 9 || t == 9) return true;
    else return false;
  };

  const rowChange = (col) => {
    for (let i = 0; i < 3; i++) {
      maze[i][col] = maze[i][col] === 'H' ? 'T' : 'H';
    }
  };

  const colChange = (row) => {
    for (let i = 0; i < 3; i++) {
      maze[row][i] = maze[row][i] === 'H' ? 'T' : 'H';
    }
  };

  const crossChange = (dir) => {
    for (let i = 0; i < 3; i++) {
      if (dir == 0) {
        maze[i][i] = maze[i][i] == 'H' ? 'T' : 'H';
      } else {
        maze[i][2 - i] = maze[i][2 - i] == 'H' ? 'T' : 'H';
      }
    }
  };

  let answer = 1415;

  const strTrans = () => {
    let str = '';
    maze.forEach((row) => {
      row.forEach((val) => {
        if (val === 'H' || val === 'H\r') str += 'H';
        else str += 'T';
      });
    });
    return str;
  };

  const mazeTrans = (state) => {
    let cur = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        maze[i][j] = state[cur++];
      }
    }
  };

  const bfs = () => {
    const visited = new Map();
    const queue = [];
    const first = strTrans();
    queue.push([first, 0]);
    visited.set(first, true);
    while (queue.length) {
      const [cur, depth] = queue.shift();
      mazeTrans(cur);
      if (check()) return depth;
      for (let i = 0; i < 3; i++) {
        rowChange(i);
        let nxt = strTrans();
        if (!visited.get(nxt)) {
          visited.set(nxt, true);
          queue.push([nxt, depth + 1]);
        }
        rowChange(i);
      }

      for (let i = 0; i < 3; i++) {
        colChange(i);
        let nxt = strTrans();
        if (!visited.get(nxt)) {
          visited.set(nxt, true);
          queue.push([nxt, depth + 1]);
        }
        colChange(i);
      }

      for (let i = 0; i <= 1; i++) {
        crossChange(i);
        let nxt = strTrans();
        if (!visited.get(nxt)) {
          visited.set(nxt, true);
          queue.push([nxt, depth + 1]);
        }
        crossChange(i);
      }
    }
  };

  let ans = '';
  for (let i = 0; i < N * 3; i += 3) {
    maze = [];
    maze.push(map[i].split(' '));
    maze.push(map[i + 1].split(' '));
    maze.push(map[i + 2].split(' '));
    const answer = bfs();
    if (answer === undefined) ans += `-1\n`;
    else ans += `${answer}\n`;
  }
  return ans;
};

console.log(solution(input));

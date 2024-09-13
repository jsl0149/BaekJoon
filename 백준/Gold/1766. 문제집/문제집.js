const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

//최소힙
class Heap {
  constructor() {
    this.heap = [];
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  push(node) {
    this.upHeap(node);
  }

  size() {
    return this.heap.length;
  }

  pop() {
    const popValue = this.heap[0];
    const lastValue = this.heap.pop();
    if (this.heap.length === 0) return popValue;
    this.heap[0] = lastValue;
    this.downHeap(lastValue);
    return popValue;
  }

  upHeap(curNode) {
    this.heap.push(curNode);

    let curIdx = this.heap.length - 1;
    let parent = Math.ceil(curIdx / 2) - 1;

    while (this.heap[parent] > curNode) {
      this.swap(curIdx, parent);
      curIdx = parent;
      parent = Math.ceil(curIdx / 2) - 1;
    }
  }

  downHeap(curNode) {
    let curIdx = 0;

    while (true) {
      const leftChildIdx = curIdx * 2 + 1;
      const rightChildIdx = curIdx * 2 + 2;
      let targetIdx = curIdx;

      if (leftChildIdx >= this.heap.length) break;

      if (leftChildIdx < this.heap.length) {
        targetIdx =
          this.heap[leftChildIdx] < curNode ? leftChildIdx : targetIdx;
      }

      if (rightChildIdx < this.heap.length) {
        const curMinIdx =
          this.heap[leftChildIdx] < this.heap[rightChildIdx]
            ? leftChildIdx
            : rightChildIdx;

        if (curNode > this.heap[curMinIdx]) targetIdx = curMinIdx;
      }

      if (curIdx === targetIdx) break;

      this.swap(curIdx, targetIdx);

      curIdx = targetIdx;
    }
  }
}

const solution = (input) => {
  const answer = [];

  const [N, M] = input[0].split(' ').map(Number);

  const info = input.slice(1).map((row) => row.split(' ').map(Number));

  const graph = new Array(N + 1).fill(0).map(() => []);

  const indegrees = new Array(N + 1).fill(0);

  // 간선 연결 및 진입 차수 설정
  info.forEach((val) => {
    const [from, to] = val;
    graph[from].push(to);
    indegrees[to]++;
  });

  const minHeap = new Heap();

  // 진입 차수가 0이면 heap에 넣기
  indegrees.forEach((indegree, node) => {
    if (indegree === 0 && node !== 0) minHeap.push(node);
  });

  // heap에 아무것도 없으면 반복문 종료
  while (minHeap.size()) {
    const curNode = minHeap.pop();
    answer.push(curNode);
    graph[curNode].forEach((next) => {
      indegrees[next]--;
      if (indegrees[next] === 0) minHeap.push(next);
    });
  }

  return answer.join(' ');
};

console.log(solution(input));

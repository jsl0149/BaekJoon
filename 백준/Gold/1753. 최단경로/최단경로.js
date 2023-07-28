const fs = require('fs')
const I = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [V, E] = I[0].split(' ').map(Number)
const K = +I[1]
let G = Array.from({length: V + 1}, _ => [])
for (let i = 2; i < E + 2; i++) {
  const [u, v, w] = I[i].split(' ').map(Number)
  G[u].push([v, w])
}
let O = new Array(V + 1).fill(Infinity)
const visited = new Array(V + 1).fill(0)
visited[0] = 1
O[K] = 0
const Q = [[K, 0]]
while (Q.length) {
  const [c, l] = Q.shift()
  visited[c] = 1
  for (const [v, w] of G[c]) if (l + w < O[v]) O[v] = l + w
  const n = O.reduce((p, _, c) => (O[c] < O[p] && !visited[c] ? c : p), 0)
  if (n) Q.push([n, O[n]])
}
O.shift()
O = O.map(e => e == Infinity ? 'INF' : e)
console.log(O.join('\n'))
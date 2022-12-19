const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const tree = {};
const N = parseInt(input[0]);
const data = input.slice(1);
let answer = ``;

const preorder = (node) => {
    if(node === '.') return;
    answer += `${node}`;

    preorder(tree[node][0])
    preorder(tree[node][1])
}

const inorder = (node) => {
    if(node === '.') return;
    inorder(tree[node][0])
    answer += `${node}`;
    inorder(tree[node][1])
}

const postorder = (node) => {
    if(node === '.') return;
    postorder(tree[node][0])
    postorder(tree[node][1])
    answer += `${node}`;
}

data.forEach((val)=>{
    const temp = val.split("\r")
    const [node, left, right] = temp[0].split(' ');
    tree[node] = [left, right];
});


preorder("A");
console.log(answer);
answer = ``;
inorder("A");
console.log(answer);
answer =``;
postorder("A");
console.log(answer);

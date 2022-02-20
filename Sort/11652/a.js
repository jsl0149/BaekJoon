const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const compare = (a, b) => {
  if (a.v < b.v) {
    return 1;
  } else if (a.v === b.v) {
    if (a.k < b.k) {
      return -1;
    } else return 1;
  } else return -1;
};

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const data = input.slice(1).map((val) => BigInt(val));

  const redun = data.filter((val, idx) => idx === data.indexOf(val));

  const answer = new Map();

  redun.forEach((val) => {
    answer.set(val, 0);
  });

  data.forEach((val) => {
    let cur = answer.get(val) + 1;
    answer.set(val, cur);
  });

  const realanswer = redun.map((val) => {
    return { k: val, v: answer.get(val) };
  });

  realanswer.sort(compare);

  console.log(realanswer[0].k.toString());

  process.exit();
});

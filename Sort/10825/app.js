const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const compare = (a, b) => {
  const splitA = a.split(' ');
  const splitB = b.split(' ');

  const nameA = splitA[0];
  const nameB = splitB[0];

  const koreanA = parseInt(splitA[1]);
  const koreanB = parseInt(splitB[1]);

  const englishA = parseInt(splitA[2]);
  const englishB = parseInt(splitB[2]);

  const mathA = parseInt(splitA[3]);
  const mathB = parseInt(splitB[3]);

  if (koreanA < koreanB) {
    return 1;
  } else if (koreanA === koreanB) {
    if (englishA < englishB) {
      return -1;
    } else if (englishA === englishB) {
      if (mathA < mathB) {
        return 1;
      } else if (mathA === mathB) {
        if (nameA < nameB) {
          return -1;
        } else return 1;
      } else return -1;
    } else return 1;
  } else return -1;
};

const data = input.slice(1);

data.sort(compare);

const res = data.reduce((acc, cur) => {
  return acc + `${cur.split(' ')[0]}\n`;
}, '');

console.log(res);

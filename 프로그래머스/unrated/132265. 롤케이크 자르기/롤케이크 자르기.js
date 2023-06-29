function solution(topping) {
  const [b1Dict, b1Arr, b2Dict, b2Arr] = [new Set(), [], new Set(), []];
  topping.forEach((t1, i) => {
    const t2 = topping.at(-i);
    b1Dict.add(t1);
    if (i !== 0) b2Dict.add(t2);
    b1Arr.push(b1Dict.size);
    b2Arr.push(b2Dict.size);
  });
  return b1Arr.reduce(
    (acc, cur, i) => (cur === b2Arr.at(-i - 1) ? acc + 1 : acc),
    0
  );
}

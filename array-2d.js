//count the occurrences of distinct elements in a 2D array of strings.using flat() and reduce()

const input = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];

const flatArr  =  input.flat();
const result = flatArr.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(result);

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

// Numeronym
const input1 = "Every developer likes to mix kubernetes and javascript";

const splitInput = input1.split(" ");

const mapInput = splitInput.map(word => {
  if (word.length < 4) return word;
  return word[0] + (word.length - 2) + word[word.length - 1]; 
});

const result1 = mapInput.join(" "); 
console.log(result1);

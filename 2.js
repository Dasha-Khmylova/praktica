// Find the unique number
function findUniq(arr) {
  const [a, b, c] = arr;

  const common = a === b ? a : c === a ? a : b;

  for (let num of arr) {
    if (num !== common) return num;
  }
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0])); 
console.log(findUniq([3, 10, 3, 3, 3])); 
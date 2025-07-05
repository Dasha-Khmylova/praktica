/*The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence 
in an array or list of integers*/
function maxSequence(arr) {
  if (arr.length === 0) return 0;

  let maxSum = 0;
  let currentSum = 0;

  for (let num of arr) {
    currentSum += num;
    if (currentSum < 0) currentSum = 0;
    if (currentSum > maxSum) maxSum = currentSum;
  }

  return maxSum;
}

console.log(maxSequence([4, -1, 2, 1, 10]))
console.log(maxSequence([-2, -3, -1]))
console.log(maxSequence([1]))
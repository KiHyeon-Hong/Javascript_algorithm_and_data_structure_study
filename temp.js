function maxSubarraySum(arr, goal) {
  if (arr.length < goal) return null;

  let sum = 0;
  let max = -Infinity;

  for (let i = 0; i < goal; i++) sum += arr[i];
  for (let i = 1; i < arr.length - goal + 1; i++) {
    let temp = sum - arr[i - 1] + arr[i + goal - 1];
    console.log(arr[i - 1], arr[i + goal - 1], temp, sum);

    if (max < temp) max = temp;
    sum = temp;
  }

  return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));

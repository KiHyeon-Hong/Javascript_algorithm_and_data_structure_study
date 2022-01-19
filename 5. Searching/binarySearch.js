/*
Binary Search Exercise
Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

Examples:

binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
*/

function binarySearch(arr, goal) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = arr[parseInt((left + right) / 2)];

    if (mid === goal) {
      return parseInt((left + right) / 2);
    } else if (mid < goal) {
      left = parseInt((left + right) / 2) + 1;
    } else {
      right = parseInt((left + right) / 2) - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1

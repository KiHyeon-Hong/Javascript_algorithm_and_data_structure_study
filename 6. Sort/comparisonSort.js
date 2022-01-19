// 해당 자릿수가 몇인지 반환
function getDigit(num, place) {
  return Math.abs(parseInt((num / Math.pow(10, place)) % 10));
}

// 해당 숫자의 자릿수 반환
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// 배열 중 가장 큰 자릿수 반환
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[1]));
  }

  return maxDigits;
}

function comparisonSort(nums) {
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      digitBuckets[getDigit(nums[i], k)].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

let data = Array.apply(null, { length: 100000 }).map((v) => {
  return parseInt(Math.random() * 10000);
});

console.log(comparisonSort(data));

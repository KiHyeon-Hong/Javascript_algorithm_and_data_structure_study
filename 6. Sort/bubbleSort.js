function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

// 정렬 중간에 정렬이 완료되었는지 확인
function bubbleSortUpgrade(arr) {
  let check = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    check = 0;

    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        check++;
      }
    }

    if (check === 0) break;
  }

  return arr;
}

let data = Array.apply(null, { length: 100000 }).map((v) => {
  return parseInt(Math.random() * 100000);
});

let orig = [6, 3, 9, 8, 4, 1, 10, 3, 7, 9, 4, 3, 2, 6, 4, 1, 9, 0];
console.log(bubbleSortUpgrade(data));

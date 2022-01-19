function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];

    for (let j = i - 1; j >= -1; j--) {
      if (j === -1 || arr[j] < temp) {
        arr[j + 1] = temp;
        break;
      } else if (arr[j] > temp) {
        arr[j + 1] = arr[j];
      }
    }
  }

  return arr;
}

let orig = [3, 2, 4, 5, 10, 10, 1, 6, 10, 10, 0, -1, 7, 6, 4, 3];
console.log(insertSort(orig));

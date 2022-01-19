function selectionSort(arr) {
  let min = -1;

  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    [arr[min], arr[i]] = [arr[i], arr[min]];
  }

  return arr;
}

let orig = [6, 3, 9, 8, 4, 1, 10, 3, 7, 9, 4, 3, 2, 6, 4, 1, 9, 0];
console.log(selectionSort(orig));

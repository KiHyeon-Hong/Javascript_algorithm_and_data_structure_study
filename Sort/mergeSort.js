function mergeSort(arr) {}

let data = Array.apply(null, { length: 10000 }).map((v) => {
  return parseInt(Math.random() * 100000);
});

console.log(mergeSort(data));

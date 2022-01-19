/*
function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

naiveSearch('lorie loled', 'lol');
*/

function naiveSearch(str1, str2) {
  let result = [];

  for (let i = 0; i < str1.length; i++) {
    let idx = str1.indexOf(str2, i);

    if (idx === -1) break;
    else if (idx !== -1) {
      result.push(idx);
      i = idx;
    }
  }

  return result;
}

console.log(naiveSearch('lorie loledloleddddddddlolaaas', 'lol'));

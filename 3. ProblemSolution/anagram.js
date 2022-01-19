function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm');
/*
if (str1.length !== str2.length) return false;

let s1 = {};
let s2 = {};

str1.split('').map((v) => {
  s1[v] = ++s1[v] || 1;
});
str2.split('').map((v) => {
  s2[v] = ++s2[v] || 1;
});

for (let key in s1) {
  if (!(key in s2) || s1[key] !== s2[key]) return false;
}
return true;
*/

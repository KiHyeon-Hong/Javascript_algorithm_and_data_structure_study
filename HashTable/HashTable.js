class HashTable {
  constructor(size = 13) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0);
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keyArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keyArr.includes(this.keyMap[i][j][0])) {
            keyArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }

    return keyArr;
  }

  values() {
    let valueArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valueArr.includes(this.keyMap[i][j][1])) {
            valueArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }

    return valueArr;
  }
}

let hashMap = new HashTable();
hashMap.set('AA', 'a');
hashMap.set('BB', 'b');
hashMap.set('CC', 'c');
hashMap.set('DD', 'd');
hashMap.set('EE', 'e');
hashMap.set('FF', 'f');
hashMap.set('GG', 'g');
hashMap.set('HH', 'h');
hashMap.set('II', 'i');
hashMap.set('JJ', 'j');
hashMap.set('KK', 'k');
hashMap.set('LL', 'a');
hashMap.set('MM', 'a');
hashMap.set('NN', 'a');
hashMap.set('OO', 'a');

console.log(hashMap.keyMap);

console.log(hashMap.get('DD'));
console.log(hashMap.get('OO'));
console.log(hashMap.get('PP'));
console.log();

console.log(hashMap.values());
console.log(hashMap.keys());

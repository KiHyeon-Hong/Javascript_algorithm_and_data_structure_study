class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // 해당 위치의 요소를 출력한다.
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set() {}
}

let list = new SingleLinkedList();
/*
list.push('Hi');
list.push('Hello');
list.push('world');
list.push('!');

console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());

list.push('Hi');
list.push('Hello');
list.push('world');
list.push('!');

console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
*/

list.unshift('Hi');
list.push('Hello');
list.push('world');
list.push('!');
list.unshift('Welcome');

console.log(list.get(0).val);
console.log(list.get(0).val);
console.log(list.get(1).val);
console.log(list.get(2).val);
console.log(list.get(3).val);
console.log(list.get(4).val);
console.log(list.get(5));

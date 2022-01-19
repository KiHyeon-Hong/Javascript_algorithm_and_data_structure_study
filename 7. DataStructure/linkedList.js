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

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) return this.push(val);
    else if (index === 0) return this.unshift(val);
    else {
      let newNode = new Node(val);
      let prev = this.get(index - 1);

      newNode.next = prev.next;
      prev.next = newNode;

      this.length++;

      return newNode;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;

    this.length--;
    return removed;
  }

  print() {
    let arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;

      prev = node;
      node = next;
    }

    return this;
  }
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

/*
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

list.set(0, 'WelCome!!!');
console.log(list.get(0).val);
console.log(list.get(1).val);
*/

/*
list.push(1);
list.push(2);
list.push(3);
list.push(4);

console.log(list.get(2));
list.insert(2, 20);
console.log(list.get(2));
list.remove(3);
console.log(list.get(2));
*/

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.print();

list.reverse();

list.print();

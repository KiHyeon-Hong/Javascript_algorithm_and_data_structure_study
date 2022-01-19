class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return false;

    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;

    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;

      while (count !== index) {
        current = current.next;
        count++;
      }

      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;

      while (count !== index) {
        current = current.prev;
        count--;
      }

      return current;
    }
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return this.unshift(val);
    else if (index === this.length) return this.push(val);
    else {
      let newNode = new Node(val);
      let beforeNode = this.get(index - 1);
      let afterNode = beforeNode.next;

      beforeNode.next = newNode;
      newNode.prev = beforeNode;
      newNode.next = afterNode;
      afterNode.prev = newNode;

      this.length++;

      return true;
    }
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;

    if (index === 0) return this.shift();
    else if (index === this.length - 1) return this.pop();
    else {
      let removeNode = this.get(index);

      removeNode.prev.next = removeNode.next;
      removeNode.next.prev = removeNode.prev;

      removeNode.next = null;
      removeNode.prev = null;

      this.length--;
      return removeNode;
    }
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
}

let list = new DoublyLinkedList();

/*
list.push(1);
list.push(2);
list.push(3);
*/

list.unshift(5);
list.unshift(4);
list.unshift(3);
list.unshift(2);
list.unshift(1);

list.insert(0, 10);
list.insert(3, 30);
list.insert(7, 50);

list.print();

list.remove(7);
list.print();

list.remove(0);
list.print();

list.remove(1);
list.print();

list.remove(1);
list.print();

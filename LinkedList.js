import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.headNode === null) {
      this.headNode = newNode;
    } else {
      let current = this.headNode;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
  }

  size() {
    let count = 0;
    let current = this.headNode;
    while (current !== null) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    let current = this.headNode;
    if (current === null) return null;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    let current = this.headNode;
    let count = 0;
    while (current !== null && count < index) {
      current = current.nextNode;
      count++;
    }
    return current !== null ? current : null;
  }

  pop() {
    if (this.headNode === null) return null;
    if (this.headNode.nextNode === null) {
      const popped = this.headNode;
      this.headNode = null;
      return popped;
    }

    let current = this.headNode;
    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }
    const popped = current.nextNode;
    current.nextNode = null;
    return popped;
  }

  contains(value) {
    let current = this.headNode;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.headNode;
    let index = 0;
    while (current !== null) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let result = "";
    let current = this.headNode;
    while (current !== null) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return result + "null";
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    const newNode = new Node(value);
    let current = this.headNode;
    let count = 0;
    while (current !== null && count < index - 1) {
      current = current.nextNode;
      count++;
    }

    if (current === null) {
      throw new Error("Index out of bounds");
    }

    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
  }

  removeAt(index) {
    if (index === 0 && this.headNode !== null) {
      this.headNode = this.headNode.nextNode;
      return;
    }

    let current = this.headNode;
    let count = 0;
    while (current !== null && count < index - 1) {
      current = current.nextNode;
      count++;
    }

    if (current === null || current.nextNode === null) {
      throw new Error("Index out of bounds");
    }

    current.nextNode = current.nextNode.nextNode;
  }
}

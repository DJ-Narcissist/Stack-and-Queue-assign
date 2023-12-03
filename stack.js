/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    const val = this.top.val;
    this.top = this.top.next;
    this.size--;
    return val
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.top.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;

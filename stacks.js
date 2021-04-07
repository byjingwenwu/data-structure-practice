// functions: push, pop, peak, length

class Stack {
  constructor(storage = []) {
    this.storage = storage;
  }

  push(value) {
    this.storage.push(value);
  }

  pop() {
    if (!this.storage.length) {
      return console.log("Empty Stack");
    }
    // this.storage.pop()
    this.storage.splice(this.storage.length - 1, 1)
  }

  peak() {
    if (!this.storage.length) {
      return console.log("Empty Stack");
    }
    return this.storage[this.storage.length - 1];
  }

  length(){
    if (!this.storage.length) {
      return console.log("Empty Stack");
    }
    return this.storage.length;
  }
}

var myStack = new Stack();

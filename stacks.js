// functions: push, pop, peak, length

class Stack {
  constructor(count = 0, storage = []) {
    this.count = count;
    this.storage = storage;
  }

  push(value) {
    this.storage.push(value);
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return console.log("Empty Stack");
    }
    this.storage.pop()
  }
}

var myStack = new Stack();
myStack.push(12)
myStack.push(15)
// console.log(myStack.count)
// console.log(myStack.storage)
// console.log(myStack)
myStack.pop();
console.log(myStack.storage)

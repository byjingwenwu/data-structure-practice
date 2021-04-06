// functions: push, pop, peak, length

class Stack {
  constructor(count = 0, storage = []) {
    this.count = count;
    this.storage = storage;
  }

  Add(value) {
    this.count++;
    this.storage.push(value)
  }
}

var mystack = new Stack();
mystack.Add(12)
mystack.Add("letter")
console.log(mystack.storage)

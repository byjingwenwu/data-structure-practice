//functions: add, clear, delete, has

class createSet {
  constructor(collection = []) {
    this.collection = collection;
  }

  has(value) {
    return (console.log(this.collection.includes(value)));
  }

  values() {
    const iterator = this.collection.values();
    return (iterator);
  }

  add(value) {
    if(this.collection.includes(value)) {
      return (console.log("repeat value"));
    }
    this.collection.push(value);
  }

  delete(value) {
    if (this.collection.includes(value)) {
      let index = this.collection.indexOf(value);
      this.collection.splice(index, 1);
      return console.log("removed");
    }
    return console.log("error");
  }
}

var mySet = new createSet();

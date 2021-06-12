class createHash {
  constructor() {
    this.storage = [];
    this.storageMax = 10;
  }

  //simple example hash function
  hash(input) {
    let h = 0;
    for (let i = 0; i < input.length; i++) {
      h += input.charCodeAt(i);
    }
    return h % this.storageMax;
  }

  add(key, value) {
    let index = hash(key);
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          return;
        }
      }
      this.storage[index].push([key, value]);
    }
  }

  remove(key) {
    let index = hash(key);
    if (!this.storage[index]) {
      return console.log("Value not exist.");
    }
    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        delete this.storage[index][i];
        return;
      }
    }
    return console.log("value not exist.");
  }

  search(key) {
    let index = hash(key);

  }
}

var myHash = new createHash()

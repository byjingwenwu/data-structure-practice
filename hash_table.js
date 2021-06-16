class hashTable {
  constructor() {
    this.storage = {};
    this.tableSize = 10;
  }

  //simple example hash function, assume input as strings
  hashFunction(key) {
    let h = 0;
    for (let i = 0; i < key.length; i++) {
      h += key.charCodeAt(i);
    }
    return h % this.tableSize;
  }

  add(key, value) {
    const hash = this.hashFunction(key);
    if (!this.storage.hasOwnProperty(hash)) {
      this.storage[hash] = {};
    }
    this.storage[hash][key] = value;
  }

  search(key) {
    const hash = this.hashFunction(key);
    if (!this.storage.hasOwnProperty(hash) || !this.storage[hash].hasOwnProperty(key)) {
      return console.log("Value not found.")
    } else {
      return this.storage[hash][key];
    }
  }

  delete(key) {
    const hash = this.hashFunction(key);
    if (!this.storage.hasOwnProperty(hash) || !this.storage[hash].hasOwnProperty(key)) {
      return console.log("No such value.")
    } else {
      return delete this.storage[hash][key];
    }
  }
}

const myHash = new hashTable();

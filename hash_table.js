var hash = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
}

class createHash {
  constructor(storage, storageMax) {
    this.storage = storage;
    this.storageMax = storageMax;
  }

  add(key, value) {
    let index = hash(key, this.storageMax);
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      for (let i = 0; i < this.storage[index].length; i++){
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          return;
        }
      }
      this.storage[index].push([key, value]);
    }
  }

  remove(key) {
    let index = hash(key, this.storageMax);
    if (!this.storage[index]) {
      return console.log("value not exist");
    }
    if(this.storage[index].length === 1 && storage[index][0][0] === key) {
      detele this.storage[index];
      return;
    }
    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        delete this.storage[index][i];
      } else {
        return console.log("value not exist");
      }
    }
  }
}

var myHash = new createHash([], 10)

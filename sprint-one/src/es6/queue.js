class Queue {

  constructor() {
    this.storage = {};
    this.count = 0;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  };

  dequeue() {
    if (this.count > 0) {
      var temp = this.storage[0];
      delete this.storage[0];
      for (var key in this.storage) {
        var index = Number(key) - 1;
        this.storage[index] = this.storage[key];
        delete this.storage[key];
      }
      this.count--; 
      return temp;
    }
  };

  size() {
    return this.count;
  }

}

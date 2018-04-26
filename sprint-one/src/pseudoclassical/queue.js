var Queue = function() {
  this.storage = {};
  this.count = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
}

Queue.prototype.dequeue = function() {
  if(this.count > 0) {
    var temp = this.storage[0]
    delete this.storage[0];
    for(var key in this.storage){
      var index = Number(key) - 1;
      this.storage[index] = this.storage[key];
      delete this.storage[key];
    }
    this.count--;
    return temp;
  }
}

Queue.prototype.size = function() {
  return this.count;
}
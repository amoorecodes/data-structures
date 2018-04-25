var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  count = 0;

  // Implement the methods below
  // First In First Out
  // enqueue will always push a value at index 0
  // enqueue has to shift all other elements 1 index up
  // dequeue has to delete last element in the queue

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    if (count > 0) {
    // count--;
    // delete storage[count];
    var temp = storage[0]
    delete storage[0];
    for(var key in storage) {
      var index = Number(key) - 1;
      storage[index] = storage[key];
      delete storage[key];
    }
    count--;
    return temp;
    }
    

  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

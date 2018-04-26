var Queue = function() {
  var someInstance = {};

  var storage = {};
  count = 0;

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    if (count > 0) {
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

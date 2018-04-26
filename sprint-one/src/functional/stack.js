var Stack = function() {
  
  var someInstance = {};
  var storage = {};
  var count = 0;

  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    if (count > 0) {
    count--;
    var temp = storage[count];
    delete storage[count];
    return temp;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

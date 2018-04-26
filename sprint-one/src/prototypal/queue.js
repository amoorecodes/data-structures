var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;

  return someInstance;
};

var queueMethods = {
  enqueu: function() {
    
  }, 
  unqueue: function() {

  },
  size: function() {
    return this.storage;
  }
};



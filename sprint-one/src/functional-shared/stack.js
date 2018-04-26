var Stack = function() {

  var someInstance = {
    storage: {}, 
    count: 0
  };

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {

  push : function(value) {
    this.storage[this.count] = value;
    this.count++;
  },

  pop : function() {
    if(this.count > 0) {
      this.count--;
      var temp = this.storage[this.count];
      delete this.storage[this.count];
      return temp;
    }
  },

  size : function() {
    return this.count;
  }
  
};



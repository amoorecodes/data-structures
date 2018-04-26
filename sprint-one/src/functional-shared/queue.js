var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    count: 0
  };

  _.extend(someInstance, queueMethods);
  

};

var queueMethods = {
  enqueue: function() {

  },
  unqueue: function() {

  },
  size: function() {
    return this.count;
  }
};



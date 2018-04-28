

// O(1)
var Graph = function() {
  this.storage = {};

};

// O(1)
Graph.prototype.addNode = function(node) {
  this.storage[node] = {};
};

// O(1)
Graph.prototype.contains = function(node) {
  if (this.storage[node]) {
    return true;
  } else {
    debugger;
    return false;
  }
};

// O(1)
Graph.prototype.removeNode = function(node) {

  if (this.storage[node] !== undefined) {
    for (var key in this.storage[node]) {
      delete this.storage[key][node];
    }
  }
  delete this.storage[node];
};

// O(1)
Graph.prototype.hasEdge = function(fromNode, toNode) {

  if (this.storage[fromNode][toNode]) {
    return true;
  } else {
    return false;
  }
};

// O(1)
Graph.prototype.addEdge = function(fromNode, toNode) {

  if (this.storage[fromNode] && this.storage[toNode]) {
    this.storage[fromNode][toNode] = true;
  }
  if (this.storage[fromNode] && this.storage[toNode]) {
    this.storage[toNode][fromNode] = true;
  }
};

// O(1).
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.storage[fromNode] && this.storage[toNode]) {
    this.storage[fromNode][toNode] = false;
  }
  if (this.storage[fromNode] && this.storage[toNode]) {
    this.storage[toNode][fromNode] = false;
  }
};

// O(n)
Graph.prototype.forEachNode = function(cb) {

  for (var key in this.storage) {
    cb(key);
  }
};



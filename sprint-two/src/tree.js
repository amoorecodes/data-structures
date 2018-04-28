// O(1)
var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  
  newTree.value = value;
  // newTree.references = {};
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

// O(1)
treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

// O(n log(n))
treeMethods.contains = function(target) {
  if (target === this.value) {
    return true;
  }

  if (this.children.length !== 0) {
    for (var i = 0; i < this.children.length; i++) {

      if (this.children[i].contains(target)) {
          return true;
        };
    }    
  };
  return false;
}
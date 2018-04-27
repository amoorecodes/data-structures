var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  
  newTree.value = value;
  // newTree.references = {};
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

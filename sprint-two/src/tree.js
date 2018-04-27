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
  if (target === this.value) {
    return true;
  }
    console.log(this.children);

  if (this.children.length !== 0) {
    for (var i = 0; i < this.children.length; i++) {
      console.log(this.value)
        if (this.children[i].contains(target)) {
          return true;
        };
    }
    debugger;
    
  };
  return false;
}



/*
 * Complexity: What is the time complexity of the above functions?
 */

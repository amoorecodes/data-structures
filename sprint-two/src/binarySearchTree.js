// O(1)

var BinarySearchTree = function(value) {
  var storage = {}
  
  storage.value = value;
  storage.left = null;
  storage.right = null;
  _.extend(storage, binaryTreeMethods);
  return storage;
};

binaryTreeMethods = {};
// O(log(n))
binaryTreeMethods.insert = function(value) {
  var node = new BinarySearchTree(value);
  if (value < this.value) {
      if (!this.left) {
        this.left = node;
      } else {
        this.left.insert(value);
      }

  } else if (value > this.value) {
    if (!this.right) {
      this.right = node;
    } else {
      this.right.insert(value);
    }
  }

}
// O(log(n))
binaryTreeMethods.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    if (this.left && this.left.contsins(value)) {
      return true;
    } else {
      return false;
    } 
    } else if (value > this.value) {
      if (this.right && this.right.contains(value)) {
        return true;
      } else {
        return false;
      }
    }
  }

// O(log(n))
binaryTreeMethods.depthFirstLog = function(callback) {
  this.value = callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  } 

  if (this.right) {
    this.right.depthFirstLog(callback);
  }
}

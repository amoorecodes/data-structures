var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // Complexity O(1)
  list.addToTail = function(value) {
    var node = new Node(value);
    if (this.head === null) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;

  };

  // Complexity O(1)
  list.removeHead = function() {
    var toBeDeleted = this.head;
    delete this.head;
    this.head = toBeDeleted.next;
    return toBeDeleted.value;
  };

  // Complexity O(n)
  list.contains = function(target) {
    var starter = this.head;
    while(starter) {
      if(starter.value === target) {
        return true;
      }
      // debugger;
      starter = starter.next;
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

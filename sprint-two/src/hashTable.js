

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var insertionData = this._storage.get(index);
  if (insertionData && insertionData.length > 1) {    
    var contains = false;
    insertionData.forEach(element => (element) => (element[0] === k) && (element[1] = v), (contains = true) );
    (contains = false) && insertionData.push([k,v]);
  } else {
  this._storage.set(index, [[k,v]]);
  }
};

HashTable.prototype.retrieve = function(k) {
  console.log(this[0]);
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storedAtIndex = this._storage.get(index);
  if (storedAtIndex && storedAtIndex.length > 1) {
    storedAtIndex.forEach(function(element) {
      if (element[0] === k) {
        return element;
      }
    });
  } else if (storedAtIndex){
    return storedAtIndex[0][1];
  } else {
    return undefined; 
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var atIndex = this._storage.get(index);
  if (atIndex && atIndex !== undefined) {
    (atIndex.length > 1)
    ? 
    atIndex.forEach(element => ((element[0] === k) && atIndex.splice(element, 1))) 
    :
    this._storage.set(index, null);
  } 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = null;  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
	var newChild = new Tree(value);
	if (this.children === null) {
		this.children = [newChild];
	} else {
		this.children.push(newChild);
	}
};

treeMethods.contains = function(target){
	if (this.value === target) {
		return true;
	} else if (this.children !== null) {
		for (var i = 0; i < this.children.length; i++) {
			if (this.children[i].contains(target)) {
				return true
			};
		}
	}
	return false
};


/*
 * Complexity: What is the time complexity of the above functions? linear?
 */

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  	var newStack = {};
  	newStack.storage = {};
	newStack.firstInLine = 0;
	_.extend(newStack, stackMethods);
	return newStack;
};

var stackMethods = {
	push: function(value){
		this.storage[this.firstInLine] = value;
		this.firstInLine++;
	},
	pop: function(){
		this.firstInLine--;
		return this.storage[this.firstInLine];
	},
	size: function(){
		return Math.max(0, this.firstInLine);
	}
};



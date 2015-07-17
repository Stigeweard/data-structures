var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.firstInLine = 0;
};

Stack.prototype.push = function(value) {
	this.storage[this.firstInLine] = value;
	this.firstInLine++;
}

Stack.prototype.pop = function(){
	this.firstInLine--;
	return this.storage[this.firstInLine];
}

Stack.prototype.size = function() {
	return Math.max(this.firstInLine, 0);
}



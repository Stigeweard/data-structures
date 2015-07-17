var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.firstInLine = 0;
  this.lastInLine = 0;
};

Queue.prototype.enqueue = function(value) {
	this.storage[this.lastInLine] = value;
	this.lastInLine++;
}

Queue.prototype.dequeue = function(){
	this.firstInLine++;
	return this.storage[this.firstInLine-1];
}

Queue.prototype.size = function(){
	return Math.max(0, this.lastInLine - this.firstInLine);
}


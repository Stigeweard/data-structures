var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.firstInLine = 0;
  newQueue.lastInLine = 0;
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {
	enqueue: function(value){
		this.storage[this.lastInLine] = value;
		this.lastInLine++;
	},
	dequeue: function(){
		this.firstInLine++;
		return this.storage[this.firstInLine-1];
	},
	size: function(){
		return Math.max(this.lastInLine - this.firstInLine, 0);
	}
};




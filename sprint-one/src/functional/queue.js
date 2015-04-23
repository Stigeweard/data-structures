var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var firstInLine = 0;
  var lastInLine = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[lastInLine] = value;
    lastInLine++;
  };

  someInstance.dequeue = function(){
    var next = storage[firstInLine];
    firstInLine++;
    return next;
  };

  someInstance.size = function(){
    return Math.max(0,lastInLine - firstInLine);
  };

  return someInstance;
};

var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var firstInLine = 0;
  var lastInLine = 0;

  // Implement the methods below

  var firstInLine = 0;
  var lastInLine = 0;

  someInstance.enqueue = function(value){
    storage[lastInLine] = value;
    lastInLine++;
  };

  someInstance.dequeue = function(){
    firstInLine++;
    return storage[firstInLine-1];
  };

  someInstance.size = function(){
    var lineLength = lastInLine - firstInLine;
    return Math.max(0, lineLength);
  };

  return someInstance;
};

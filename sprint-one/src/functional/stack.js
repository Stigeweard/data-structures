var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var stackSize = 0;
  var topOfStack = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[topOfStack] = value;
    topOfStack++;
  };

  someInstance.pop = function(){
    topOfStack--;
    return storage[topOfStack+1];
  };

  someInstance.size = function(){
    return Math.max(topOfStack, 0);
  };

  return someInstance;
};

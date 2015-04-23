var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var firstInLine = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[firstInLine] = value;
    firstInLine++;
  };

  someInstance.pop = function(){
    firstInLine--;
    return storage[firstInLine];
  };

  someInstance.size = function(){
    return Math.max(0,firstInLine);
  };

  return someInstance;
};

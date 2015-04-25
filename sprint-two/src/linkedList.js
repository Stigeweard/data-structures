var LinkedList = function(){
  var list = {};
  // var posArray = []; // added
  // var posInList = 0;
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.head === null){
      list.head = new Node(value);
      list.tail = list.head;
    } else {
      list.tail.next = new Node(value);
      list.tail = list.tail.next;
    }
    list.tail.value = value;
  };

  list.removeHead = function(){
    var headValue = list.head.value;
    list.head = list.head.next;
    return headValue;
    
  };

  list.contains = function(target){

    var current = list.head;

    while(current !== null) {
      if(current.value === target){
        return true;
      } else { 
        current = current.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions? list.contains is linear O(n)
 */

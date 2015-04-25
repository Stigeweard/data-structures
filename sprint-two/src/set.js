var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {
};

setPrototype.add = function(item){
	if (this._storage === undefined) {
		this._storage = [item];
	} else if (this._storage.indexOf(item) < 0) {
		this._storage.push(item);
	}
};

setPrototype.contains = function(item){
	if(this._storage.indexOf(item) >= 0){
		return true;
	} else {
		return false;
	}
};

setPrototype.remove = function(item){
	var index = this._storage.indexOf(item)
	if(index >= 0){
		this._storage.splice(index, 1);
	}
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

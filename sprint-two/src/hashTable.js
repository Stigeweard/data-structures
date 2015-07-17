var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


// k = "chuck"
// v = 46
HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  console.log(bucket)
  if ( !bucket ) {
  	bucket = [];
  	this._storage.set(i, bucket);
  }

  var found = false;

  for(var j = 0; j < bucket.length; j++){
  	var tuple = bucket[j];
  	if ( tuple[0] === k) {
  		tuple[1] = v;
  		found = true;
  		break;
  	} 
  }

  if (!found) {
  	bucket.push([k,v]);
  	// console.log(bucket)

  }


};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  
  var bucket = this._storage.get(i);

  if (!bucket) {
  	return null;
  }

  for (var j = 0; j < bucket.length; j++) {
  	var tuple = bucket[j];
  	//console.log(tuple)
  	if(tuple[0] === k){
  		return tuple[1];
  	}
  }
  return null;

};

HashTable.prototype.remove = function(k){

};



/*
 * Complexity: What is the time complexity of the above functions?
 */

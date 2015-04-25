

var Graph = function(){
	this.nodes = {};
};

Graph.prototype.addNode = function(node){
	this.nodes[nodeKey] = node;
};

Graph.prototype.contains = function(node){
	if(this.nodes.indexOf(node) >= 0){
		return true;
	} else {
		return false;
	}
};

Graph.prototype.removeNode = function(node){
	if(this.nodes.indexOf(node) >= 0){
		this.nodes.splice(this.nodes.indexOf(node), 1);
	}
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	if (fromNode.edge !== null){
		return true;
	}
};

Graph.prototype.addEdge = function(fromNode, toNode){
	fromNode.edge = toNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */




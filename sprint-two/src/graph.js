
var Graph = function(){
};

//create a container for the nodes
Graph.prototype.newGraph = {};

Graph.prototype.addNode = function(node){
	//create empty array for the node 
	//add the node to 
	this.newGraph[node] = [];

};

Graph.prototype.contains = function(node){
	//if node in graph return true 
	if(node in this.newGraph) {
		return true
	}
	return false;

};

Graph.prototype.removeNode = function(node){
	//remove node from graph
	//call removeEdge
	delete this.newGraph[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	//if fromNode has toNode and vice versa return true
	//else return false
	if(this.newGraph[fromNode].indexOf(toNode) >= 0){
		return true;
	} else {
		return false;
	}
};

Graph.prototype.addEdge = function(fromNode, toNode){
	//create connection between fromNode and toNode
	this.newGraph[fromNode].push(toNode)
	this.newGraph[toNode].push(fromNode)
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	//remove fromNode from toNode and vice versa
};

Graph.prototype.forEachNode = function(cb){
	//for each node in graph execute callback
	for (key in this.newGraph){
		cb(key);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */




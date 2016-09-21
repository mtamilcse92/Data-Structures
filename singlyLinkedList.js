function linkedList() {
this.head = null;
}

linkedList.prototype.isEmpty = function() {
	return this.head === null;
};

linkedList.prototype.size = function() {
	var current = this.head;
	var count = 0;
	while (count !== null) {
		count++;
		current = current.next;
	}
	return count;
};

linkedList.prototype.prepend = function(val) {
	var current = this.head;
	var newNode ={
		data:val,
		next:this.head
	}
	this.head = newNode;
};

linkedList.prototype.append = function(val) {
	var newNode ={
		data:val,
		next:null
	}
	if (this.isEmpty()) {
		this.head = newNode;
		return;
	}
	var current = this.head;
	
	while (current.next !== null) {
		current = current.next;
	}
	current.next = newNode;
};


linkedList.prototype.contains = function(val) {
	var current = this.head;
	while (current !== null){
		if (current.data === val) {
			return true;
		}
		current = current.next;
	}
	return false;
};

linkedList.prototype.remove = function(val) {
	if (!this.contains(val)) {
		return
	}

	if (this.head.data === val) {
		this.head = this.head.next;
		return;
	}

	var prev = null;
	var curr = this.head;

	while (curr.data !== val) {
		prev = curr;
		curr = curr.next;
	}
	prev.next = curr.next;
};

linkedList.prototype.print = function() {
	var output = '[';
	var current = this.head;
	while (current !== null) {
		output += current.data;
		if (current.next !== null) {
			output += '] -> [';
			// output += ',';
		}
		current = current.next;
	} 
	output += '] -> null'
	// output += ']';
	console.log(output);
};
var list = new linkedList();
list.append(5);
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.print();
// list.prepend(10);
// list.prepend(5);
// list.append(20);
// console.log(list);
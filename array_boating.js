var remove_dups = function(array) {

};

Array.prototype.hi = function() {
	return "hi";
};


Array.prototype.contains = function(element) {
	for (i = 0; i < this.length; i++) {
		if (this[i] === element) {
			return true;
		}
	}
	return false;
};


Array.prototype.removeDups = function() {
	var finalArray = [];
	var length = this.length;
	var i

	for (i = 0; i < length; i++){
		if (!finalArray.contains(this[i])) {
			finalArray.push(this[i]);
		}
	};
	return finalArray;
};


Array.prototype.twoSum = function() {
	var finalArray = [];

	for (i = 0; i < this.length; i++){

		for (j = i + 1; j < this.length; j++) {
			if (this[i] + this[j] === 0) {
				finalArray.push([i,j]);
			}
		}

	}

	return finalArray;
}



var rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];

var cols = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];


var transpose = function(grid) {
	var finalGrid = [];

	for (i = 0; i < grid.length; i++) {
		finalGrid.push([]);
	}

	for (i = 0; i < grid.length; i++) {
		for (j = 0; j < grid.length; j++) {

			finalGrid[j][i] = grid[i][j];
		}
	}

	return finalGrid;
}



var multiples = function (array) {
	var finalArray = [];

	for (i = 0; i < array.length; i++) {
		finalArray[i] = array[i]*2;
	}

	return finalArray;
};





Array.prototype.myEach = function(fun) {
	for(i = 0; i < this.length; i++) {
		fun(this[i]);
	}
	return this;
};



var printMe = function (thing) {
	console.log(thing);
};

var arr = ["simon", "cowell"];


Array.prototype.myMap = function(fun) {
	var finalArray = [];

	this.myEach(function (element) {
		finalArray.push(fun(element));
	});

	return finalArray;
};

console.log(arr.myMap(function(thing){
	return thing.toUpperCase();
}));


var add = function (thing1, thing2) {
	return thing1 + thing2;
};



Array.prototype.myInject = function (fun) {
	var value = this[0];

	this.slice(1, this.length).myEach( function(element){
		value = fun(value, element);
	});
	return value;
};

var a = [1,2,3,4];

console.log(a.myInject(add));













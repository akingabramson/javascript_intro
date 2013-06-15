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



Array.prototype.bubbleSort = function() {

	var sorted = false;

	while (!sorted) {
		sorted = true;

		for (i = 0; i < this.length - 1; i++) {

			if (this[i] > this[i + 1]) {

				var placeHolder = this[i];
				this[i] = this[i + 1];
				this[i + 1] = placeHolder;
				sorted = false;
			};
		}
	}
	return this;
};


String.prototype.substrings = function() {
	var finalArray = [];
	for (i = 0; i < this.length; i++) {
		for (j = i; j < this.length; j++) {
			finalArray.push(this.slice(i, j+1));
		}
	}
	return finalArray;
};


var factorial = function(num) {
	if (num === 1) {
		return num;
	} else {
		return (num * factorial(num - 1));
	}
};

var range = function(start, end) {
	if (start === end) {
		return [end];
	} else {
		return [start] + range(start + 1, end);
	}
};

Array.prototype.sumMe = function () {
	if (this.length === 1) {
		return this[0];
	} else {
		var arr = this.slice(1, this.length);
		return this[0] + arr.sumMe();
	}
};

var a = [2,1,4,3, 6, 5, 3];
var b = [1, 2, 3, 4]

var power = function (base, exponent){
	if (exponent===0){
		return 1;
	} else {
		return base* power(base, exponent-1);
	}
};

var power2 = function (base, exponent) {
	if (exponent === 0){
		return 1;
	} else if (exponent%2 === 0) {
		return Math.pow(power2(base, exponent/2), 2);
	} else {
		return base * Math.pow(power2(base, (((exponent - 1)/2))), 2);
	}
}


var fibo = function (num) {

	if (num === 0){
		return [];
	} else if (num === 1){
		return [1];
	} else if (num === 2){
		return [1, 1];
	} else {
		return fib(num - 1) + [fib(num - 1).last + fib(num - 1).second_to_last];
	}

};
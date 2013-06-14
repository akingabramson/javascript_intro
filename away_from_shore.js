function Cat(name, owner) {
	this.name = name;
	this.owner = owner;
}


Cat.prototype.cute_statement = function() {
	return this.owner + "loves" + this.name;
};

var cat = new Cat("earl", "simon" );
var cat2 = new Cat("asher", "Mark Cuban");


console.log(cat.cute_statement());
console.log(cat2.cute_statement());

Cat.prototype.cute_statement = function() {
	return "Erryone " + "loves" + this.name;
};


console.log(cat.cute_statement());

Cat.prototype.meow = function() {
	return this.name + " Meows";
};

cat2.meow = function() {
	return this.name + "is meowing differently.  It's an apple cat."
};

console.log(cat.meow());
console.log(cat2.meow());
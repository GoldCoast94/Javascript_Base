/*最基础的单例模式*/

let Singleton = function (name) {
	this.name = name;
};

Singleton.prototype.getName = function() {
	alert(this.name);
};

Singleton.getInstance = (function() {
	let instance = null;
	return function(name) {
		if(!instance) {
			instance = new Singleton(name);
		}
		return instance;
	}
})();


let person1 = Singleton.getInstance('GoldCoast');
let person2 = Singleton.getInstance('love');

console.log(person1 == person2);
console.log(person1.name);
console.log(person2.name);
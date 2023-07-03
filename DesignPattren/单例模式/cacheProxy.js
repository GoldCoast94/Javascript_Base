/*使用缓存代理来实现单例*/

let CreateDiv = function(html) {
	this.html = html;
	this.init();
};

CreateDiv.prototype.init = function() {
	let div = document.createElement('div');
	div.innerHTML = this.html;
	document.body.appendChild(div);
};


let ProxySingletonCreateDiv = (function() {
	let instance = null;

	return function(html) {
		if (!instance) {
			instance = new CreateDiv(html);
		}
		return instance;
	}
})();


let person1 = new ProxySingletonCreateDiv('seven1');
let person2 = new ProxySingletonCreateDiv('seven2');

console.log(person1 === person2);

/*透明的单例模式*/
var CreateDiv = (function() {
	var instance;
	var CreateDiv = function(html) {
		if(instance) {
			return instance;
		}
		this.html = html;
		this.init();

		return instance = this;
	};

	CreateDiv.prototype.init = function() {
		var div = document.createElement('div');
		div.innerHTML = this.html;
		document.body.appendChild(div);
	}

	return CreateDiv;
})();

let a = new CreateDiv('seven1');
let b = new CreateDiv('seven2');

console.log(a === b);
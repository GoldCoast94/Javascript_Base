/*通用的惰性单例模式*/

let getSingle = function(fn) {
  let result;
  return function() {
      return result || (result = fn.apply(this, arguments));
  }
};


let createLoginLayer = function() {
  let div = document.createElement('div');
  div.innerHTML = '我是弹出框';
  div.style.display = 'none';
  document.body.appendChild(div);
  return div;
};

let createSingleLoginLayer = getSingle(createLoginLayer);

document.getElementById('loginLayer').click = function() {
  let loginLayer = createSingleLoginLayer();
  loginLayer.style.display = 'block';
};


let createSingleIframe = getSingle(function() {
  let iframe = document.createElement('iframe');
  document.body.appendChild(iframe);
  return iframe;
});

document.getElementById('loginBtn').onclick = function() {
  let loginIframe = createSingleIframe();
  loginIframe.src = 'www.google.com';
};



let bindEvent = getSingle(() => {
	document.getElementById('div1').onclick = function() {
        alert('travel around the world');
    }
  return true;
});


let render = function() {
	console.log("开始渲染列表");
	bindEvent();
};

render();
render();
render();

/*render和bindEvent函数执行了三次，但是div实际上只被绑定了一次*/
const promise = new Promise((resolve, reject) => {
  const value = 10;
  const a = 1;
  if (a > 10) {
    resolve(value);
  } else {
    reject("请设置大于10的数字");
  }
});

promise.then((res) => {
  console.log(res);
}).catch((rej) => {
  console.log(rej);
});


/**
 * 使用promise实现ajax操作
 * */
const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });

  return promise;
};

getJSON("dream.json").then(function(json){
  const {dream} = json;
  console.log("your dream is: " + dream);
}, (error) => {
  console.log("搞事情怎么会出错呢");
});

/**
 * 使用promise加载图片
 * */
const preLoadImage = function () {
  return new Promsie(function(resolve, reject) {
     const image = new Image();
     image.onload = resolve;
     image.onerror = reject;
     image.src = path;
  });
};

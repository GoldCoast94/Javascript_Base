// 为子系统的一组接口提供一个一致的界面，定义了一个高层接口，这个接口使子系统更加容易使用

// 1.兼容浏览器事件绑定

let addMyEvent = function (){
  if (el.addEventListener) {
    el.addEventListener(ev, fn, false)
  } else if (el.attachEvent) {
    el.attachEvent('on' + ev, fn)
  } else {
    el['on' + ev] = fn
  }
};

// 2.封装接口

let myEvent = {
  stop: e => {
    e.stopPropagation();
    e.preventDefault();
  }
};


/**
 * 优点
     减少系统相互依赖。
     提高灵活性。
     提高了安全性
 * */

/**
 * 缺点
      不符合开闭原则，如果要改东西很麻烦，继承重写都不合适。
 * */

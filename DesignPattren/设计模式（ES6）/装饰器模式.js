class Cellphone {
  create () {
    console.log("生成一个手机");
  }
}

class Decorator {
  constructor(cellphone) {
    this.cellphone = cellphone;
  }

  create() {
    this.cellphone.create();
    this.createShell();
  }

  createShell() {
    console.log("生成手机壳");
  }
}

let cellphone = new Cellphone();
cellphone.create();

console.log('>>>>>>>>>>');
let dec = new Decorator(cellphone);
dec.create();


/**
 * 优点
     装饰类和被装饰类都只关心自身的核心业务，实现了解耦。
     方便动态的扩展功能，且提供了比继承更多的灵活性。
 * */

/**
 * 缺点
     多层装饰比较复杂。
     常常会引入许多小对象，看起来比较相似，实际功能大相径庭，从而使得我们的应用程序架构变得复杂起来
 * */

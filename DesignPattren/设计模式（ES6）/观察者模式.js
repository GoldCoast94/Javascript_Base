class Subject {
  constructor() {
    this.state = 0;
    this.observers = [];
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
    this.notifyAllObservers();
  }

  notifyAllObservers() {
    this.observers.forEach(observer => {
      observer.update();
    });
  }

  attach(observer) {
    this.observers.push(observer);
  }
}

class Observer{
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.subject.attach(this);
  }

  update() {
    console.log(`${this.name} update, state: ${this.subject.getState()}`);
  }
}

let s = new Subject();
let o1 = new Observer('o1', s);
let o2 = new Observer('o2', s);

s.setState(13);

/**
 *优点
   支持简单的广播通信，自动通知所有已经订阅过的对象
   目标对象与观察者之间的抽象耦合关系能单独扩展以及重用
   增加了灵活性
   观察者模式所做的工作就是在解耦，让耦合的双方都依赖于抽象，而不是依赖于具体。从而使得各自的变化都不会影响到另一边的变化。
 * */

/**
 * 缺点
    过度使用会导致对象与对象之间的联系弱化，会导致程序难以跟踪维护和理解
 * */

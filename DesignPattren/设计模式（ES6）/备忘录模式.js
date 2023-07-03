// 备忘类
class Memento{
  constructor(content) {
    this.content = content;
  }

  getContent(name) {
    console.log(name);
    return this.content;
  }
}

//备忘列表
class CareTaker {
  constructor() {
    this.list = [];
  }
  add(memento) {
    this.list.push(memento)
  }
}

class Editor{
  constructor() {
    this.content = null;
  }

  setContent(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  saveContentToMemento() {
    return new Memento(this.content);
  }

  getContentFromMemento(memento) {
    this.content = memento.getContent('jack');
  }
}

let editor = new Editor()
let careTaker = new CareTaker()

editor.setContent('111')
editor.setContent('222')
careTaker.add(editor.saveContentToMemento())
editor.setContent('333')
careTaker.add(editor.saveContentToMemento())
editor.setContent('444')
careTaker.add(editor.saveContentToMemento())


console.log(editor.getContent()) //444
editor.getContentFromMemento(careTaker.list[1])
console.log(editor.getContent()) //333

editor.getContentFromMemento(careTaker.list[0])
console.log(editor.getContent()) //222

console.log(careTaker);

/**
 * 场景例子
     分页控件
     撤销组件
 * */

/**
 * 优点
      给用户提供了一种可以恢复状态的机制，可以使用户能够比较方便地回到某个历史的状态
 * */

/**
 * 缺点
      消耗资源。如果类的成员变量过多，势必会占用比较大的资源，而且每一次保存都会消耗一定的内存。
 * */

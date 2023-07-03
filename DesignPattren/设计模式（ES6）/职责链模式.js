// 请假审批，需要组长审批、经理审批、总监审批
class Action {
  constructor(name) {
    this.name = name
    this.nextAction = null
  }
  setNextAction(action) {
    this.nextAction = action
  }
  handle() {
    console.log( `${this.name} 审批`)
    if (this.nextAction != null) {
      this.nextAction.handle()
    }
  }
}

let a1 = new Action("组长")
let a2 = new Action("经理")
let a3 = new Action("总监")
a1.setNextAction(a2)
a2.setNextAction(a3)
a1.handle()

/**
 * 优点
     降低耦合度。它将请求的发送者和接收者解耦。
     简化了对象。使得对象不需要知道链的结构
     增强给对象指派职责的灵活性。通过改变链内的成员或者调动它们的次序，允许动态地新增或者删除责任
     增加新的请求处理类很方便。
 * */

/**
 * 缺点
     不能保证某个请求一定会被链中的节点处理，这种情况可以在链尾增加一个保底的接受者节点来处理这种即将离开链尾的请求。
     使程序中多了很多节点对象，可能再一次请求的过程中，大部分的节点并没有起到实质性的作用。他们的作用仅仅是让请求传递下去，
     从性能方面考虑，要避免过长的职责链到来的性能损耗。
 * */

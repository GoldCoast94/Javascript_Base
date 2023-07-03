class Beverage {
  constructor({brewDrink, addCondiment}) {
    this.brewDrink = brewDrink
    this.addCondiment = addCondiment
  }
  /* 烧开水，共用方法 */
  boilWater() { console.log('水已经煮沸=== 共用') }
  /* 倒杯子里，共用方法 */
  pourCup() { console.log('倒进杯子里===共用') }
  /* 模板方法 */
  init() {
    this.boilWater()
    this.brewDrink()
    this.pourCup()
    this.addCondiment()
  }
}
/* 咖啡 */
const coffee = new Beverage({
  /* 冲泡咖啡，覆盖抽象方法 */
  brewDrink: function() { console.log('冲泡咖啡') },
  /* 加调味品，覆盖抽象方法 */
  addCondiment: function() { console.log('加点奶和糖') }
})
coffee.init()


/**
 * 场景例子
   一次性实现一个算法的不变的部分，并将可变的行为留给子类来实现
   子类中公共的行为应被提取出来并集中到一个公共父类中的避免代码重复
 * */

/**
 * 优点
    提取了公共代码部分，易于维护
 * */

/**
 * 缺点
    增加了系统复杂度，主要是增加了的抽象类和类间联系
 * */

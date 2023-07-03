/*传统面向对象实现策略类*/

let performanceS = function() {};

performanceS.prototype.calculateBonus = function(salary) {
  return salary * 4;
};

let performanceA = function() {};

performanceA.prototype.calculateBonus = function(salary) {
  return salary * 3;
};

let performanceB = function() {};

performanceB.prototype.calculateBonus = function(salary) {
  return salary * 2;
};

/*********************上面的是组策略类************************/

/*********************下面是环境类***************************/


let Bonus = function() {
  this.salary = null;
  this.strategy = null;
};

Bonus.prototype.setSalary = function(salary) {
  this.salary = salary;
};
Bonus.prototype.setStrategy = function(strategy) {
  this.strategy = strategy;
};

Bonus.prototype.getBonus = function() {
  if(!this.strategy) {
    throw new Error("没有设置strategy属性");
  }
  return this.strategy.calculateBonus(this.salary);
}


let bonus = new Bonus();

bonus.setSalary(1000);
bonus.setStrategy(new performanceS());

console.log(bonus.getBonus()); //4000

bonus.setStrategy(new performanceB());
console.log(bonus.getBonus()); //2000




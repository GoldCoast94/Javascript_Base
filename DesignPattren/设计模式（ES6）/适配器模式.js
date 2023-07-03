class Plug {
  getName() {
    return 'iphone充电头';
  }
}

class Target {
  constructor() {
    this.plug = new Plug();
  }

  getName() {
    return this.plug.getName() + '适配器Type-c充电头';
  }
}

let target = new Target();
target.getName();


/**
 *优点
 可以让任何两个没有关联的类一起运行。
 提高了类的复用。
 适配对象，适配库，适配数据
 * */

/**
 * 缺点
 额外对象的创建，非直接调用，存在一定的开销（且不像代理模式在某些功能点上可实现性能优化)
 如果没必要使用适配器模式的话，可以考虑重构，如果使用的话，尽量把文档完善
 * */

/**
 * 场景
 整合第三方SDK
 封装旧接口
 * */

// <template>
//   <div id="example">
//     <p>Original message: "{{message}}"</p>  <!-- Hello -->
//     <p>Computed reversed message: "{{reversedMessage}}"</p>  <!-- olleH -->
//   </div>
// </template>;
// <script type='text/javascript'>
//   export default {
//   name: 'demo',
//   data() {
//   return {
//   message: 'Hello'
// }
// },
//   computed: {
//   reversedMessage: function() {
//   return this.message.split('').reverse().join('')
// }
// }
// }
// </script>;

// 原有data 中的数据不满足当前的要求，通过计算属性的规则来适配成我们需要的格式，对原有数据并没有改变，只改变了原有数据的表现形式


/**
 * 适配器与代理模式相似,但有不同

 适配器模式： 提供一个不同的接口（如不同版本的插头）
 代理模式： 提供一模一样的接口
 * */

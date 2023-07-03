/*
<form action="www.google.com" id="registerForm" method="post">
  请输入用户名:<input type="text" name="userName"/>
  请输入密码:<input type="text" name="password"/>
  请输入手机号码:<input type="text" name="phoneNumber"/>
  <button></button>
</form>
 */

let registerForm = document.getElementById('registerForm');

let strategies = {
  isNonEmpty: function(value, errorMsg) {
    if(value === '') {
      return erroeMsg;          //不为空
    }
  },
  minLength: function(value, length, errorMsg) {
    if(value.length < length) {
      return errorMsg;          //限制最小长度
    }
  },
  isMobile: function(value, erroeMsg) {
    if(!/(^1[3|5|8]][0-9]{9})$/.test(value)) { //手机号码格式
      return errorMsg;
    }
  }
};

let Validator = function() {
  this.cache = [];       //保存校验规则
};

Validator.prototype.add = function(dom, rules) {
  let self = this;

  for(let i = 0, rule; rule = rules[i++];) {
    let strategyAry = rule.strategy.split(':');
    let errorMsg = rule.errorMsg;

    self.cache.push(() => {
      let strategy = strategyAry.shift();
      strategyAry.unshift(dom.value);
      strategyAry.push(errorMsg);
      return strategies[strategy].apply(dom,strategyAry);
    });
  }
  let ary = rule.split(':');           
  this.cache.push(() => {          
    let strategy = ary.shift();         
    ary.unshift(dom.value);             
    ary.push(errorMsg);                 
    return strategies[strategy].apply(dom, ary);
  });                    
};

Validator.prototype.start = function() {
  for (let i = 0, validataFunc; validataFunc = this.cache[i + 1];) {
    if(msg) {
      return msg;
    }
  }
}


let validataFunc = function() {
  let validator = new Validator();     //创建一个calidator对象

  /************************添加一些校验规则**********************/
  valiadator.add(registerForm.userName, [{
    strategy: 'isNonEmpty',
    errorMsg: '用户名不能为空'
  },{
    strategy: 'minLength: 10',
    errorMsg: '用户名长度不能小于10位'
  }]);
  valiadator.add(registerForm.password, [{
    strategy: 'minLength: 6',
    errorMsg: '密码长度不能小于6位'
  }]);
  valiadator.add(registerForm.phoneNumber, [{
    strategy: 'isMobile',
    errorMsg: '手机号码格式不正确'
  }]);

  let errorMsg = valiadator.start();        //获得校验结果
  return errorMsg;                          //返回校验结果
}

registerForm.onsubmit = function() {
  let erroeMsg = validataFunc();          //如果errorMsg有确切返回值，说明未通过校验
  if(errorMsg) {
    alert(errorMsg);
    return false;                         //阻止表单提交
  }
};
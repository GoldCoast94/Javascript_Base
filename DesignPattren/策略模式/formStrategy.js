/*
<form action="www.google.com" id="registerForm" method="post">
  请输入用户名:<input type="text" name="userName"/>
  请输入密码:<input type="text" name="password"/>
  请输入手机号码:<input type="text" name="phoneNumber"/>
  <input type="submit" value="Submit" />
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

Validator.prototype.add = function(dom, rule, errorMsg) {
  let ary = rule.split(':');           //把strategyh和参数分开
  this.cache.push(function() {          //把校验的步骤用空函数包起来，并且放入cache
    let strategy = ary.shift();         //用户挑选的strategy
    ary.unshift(dom.value);             //把input的value添加进参数列表
    ary.push(errorMsg);                 //把errorMsg添加进参数列表
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
  valiadator.add(registerForm.userName, 'isNonEmpty', '用户名不能为空');
  valiadator.add(registerForm.password, 'minLength:6','密码长度不能少于6位');
  valiadator.add(registerForm.phoneNumber, 'isMobile', '手机号码格式不正确');

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





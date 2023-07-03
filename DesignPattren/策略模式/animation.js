/*策略模式实现缓动动画*/

/*
<body>
  <div style='position:absolute;top: 300px; background:blue;' id='div1'>我是div</div>
</body>
 */

/********************缓动算法***************************/

let tween = {
  linear: (t, b, c, d) => {
    return c*t/d + b;
  },
  easeIn: (t, b, c, d) => {
    return c * (t /= b) *t + b;
  },
  strongEaseIn: (t, b, c, d) => {
    return c * (t /= b) * t * t * t * t + b;
  },
  strongEaseOut: (t, b, c, d) => {
    return c * ((t = t/d -1) * t * t * t * t + 1) + b;
  },
  sinEaseIn: (t, b, c, d) => {
    return c * (t /= d ) * t * t + b;
  },
  sinEaseOut: (t, b, c, d) => { 
    return c * ((t = t / d -1) * t * t + 1) + b;
  }
};

let Animate = function(dom) {
  this.dom = dom;              //进行运动的dom节点
  this.startTime = 0;          //动画开始时间
  this.startPos = 0;           //动画开始时，dom节点的位置，即dom的初始位置
  this.endPos = 0;             //动画结束时，dom节点的位置，即dom的目标位置
  this.propertyName = null;    //dom节点需要被改写的属性名
  this.easing = null;          //缓动算法
  this.duration = null;        //动画持续的时间
};

Animate.prototype.start = function(propertyName, endPos, duration, easing) {
  this.startTime = +new Date;           //动画启动时间
  this.startPos = this.dom.getBoundingClientRect()[propertyName]; //dom节点初始位置
  this.propertyName = propertyName;  //dom节点需要被改变的css属性名
  this.endPos = endPos;   //dom节点目标位置
  this.duration = duration;  //动画持续时间
  this.easing = tween[easing];  //缓动算法

  let self = this;
  let timeId = setInterval(function() {     //启动定时器，开始动画
    if(self.step() === false) {     //如果动画已结束，则清除定时器
      clearInterval(timeId);
    }
  }, 19)
}

Animate.prototype.step = function() {
  let t = +new Date;       //取得当前时间

  if(t >= this.startTime + this.duration) {
    this.update(this.endPods);     //更新小球的css属性
    return false;
  }

  let pos = this.easing( t - this.startTime, this.startPos, this.endPos - this.startPos, this.duration);
  //pos为小球的当前位置

  this.update(pos);    //更新小球的css属性
};


Animate.prototype.update = function(pos) {
  this.dom.style[this.propertyName] = pos + 'px';
};

let div = document.getElementById('div1');

let animate = new Animate(div);

animate.start('left', 900, 3000, 'strongEaseOut');

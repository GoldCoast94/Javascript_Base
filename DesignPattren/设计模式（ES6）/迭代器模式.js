class Iterator{
  constructor(container) {
    this.list = container.list;
    this.index = 0;
  }

  next() {
    if(this.hasNext()) {
      return this.list[this.index++]
    }
    return null;
  }

  hasNext() {
    if (this.index >= this.list.length) {
      return false;
    }
    return true;
  }
}


class Container{
  constructor(list) {
    this.list = list;
  }

  getIterator() {
    return new Iterator(this);
  }
}

let container = new Container([1,2,3,4,5]);
let iterator = container.getIterator();
while(iterator.hasNext()) {
  console.log(iterator.next());
}

/**
 * 特点
     访问一个聚合对象的内容而无需暴露它的内部表示。
     为遍历不同的集合结构提供一个统一的接口，从而支持同样的算法在不同的集合结构上进行操作
 * */

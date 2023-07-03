class SingleTon{
  constructor(name) {
    this.name = name;
    this.instance = null;
  }

/*构造一个广为人知的接口，供用户对该类进行实例化*/
  static getSingleton (name) {
    if(!this.instance) {
      this.instance = new SingleTon(name);
    }

    return this.instance;
  }
}
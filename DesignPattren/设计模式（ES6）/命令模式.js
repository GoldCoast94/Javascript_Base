class Receiver{
  execute() {
    console.log('接收者执行请求');
  }
}

class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }

  execute() {
    console.log('命令');
    this.receiver.execute();
  }
}

class Invoker {
  constructor(command) {
    this.command = command;
  }

  invoke() {
    console.log('开始');
    this.command.execute();
  }
}

const warehouse = new Receiver();

const order = new Command(warehouse);

const client = new Invoker(order);
client.invoke();

/**
 * 优点
     对命令进行封装，使命令易于扩展和修改
     命令发出者和接受者解耦，使发出者不需要知道命令的具体执行过程即可执行
 * */

/**
 * 缺点
      使用命令模式可能会导致某些系统有过多的具体命令类。
 * */

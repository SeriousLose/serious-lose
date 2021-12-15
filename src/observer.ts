let observer: any = {};

observer.list = {};

// 订阅消息
observer.subscribe = function (key:any, fn:any) {
  if (!this.list[key]) {
    this.list[key] = [];
  }
  this.list[key].push(fn);
};

// 发送消息
observer.trigger = function (key:any) {
  let fns = this.list[key];
  if (!fns) return;
  let args = [].slice.call(arguments, 0);
  for (let i = 0; i < fns.length; i++) {
    fns[i](...args);
  }
};

// 取消订阅
observer.unsubscribe = function (key:any, fn:any) {
  if (fn === true) {
    this.list[key] = null;
    return;
  }
  let fns = this.list[key];
  if (!fns) return;
  this.list[key] = fns.filter((item:any) => {
    return item !== fn;
  });
};

export default observer;

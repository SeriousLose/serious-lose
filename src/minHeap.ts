import observers from './observer';
import { remove } from './storage';

let minHeap: any = []; // 用于实现优先队列的最小堆
let minHeapCount = 0; // 最小堆中的元素个数
let timer: any = null; // 计时器

/**
 * 根据对象 生成优先队列
 * @params  info: {key: time}
 */
export function createMinHeapByLocalInfo(info: any) {
  const nowTime = new Date().getTime();
  let localInfoArr = Object.keys(info).map((item) => {
    return {
      key: item,
      time: info[item] - nowTime,
    };
  });
  // 如果localInfo任务为空， 则不需要在生成优先队列和生成定时任务
  if (localInfoArr.length == 0) {
    timer && clearTimeout(timer);
    return;
  }
  heapfy(localInfoArr);
  createTimer(); // 创建计时器
}

// 生成定时器
function createTimer() {
  if (timer) {
    clearTimeout(timer);
  }
  let time = minHeap[0].time; // 获取最小堆 ,堆顶,时间
  timer = setTimeout(() => {
    let timeDueItem = shift(); // 获取需要删除key
    remove(timeDueItem.key); // 删除key
    observers.trigger(timeDueItem.key); // 消息通知
  }, time);
}

/**
 * 将数组构建为最小堆
 * @param {arr} Array 需要构建成最小堆的数组
 */
function heapfy(arr: any) {
  minHeap = arr;
  minHeapCount = arr.length;
  let lastLeafChild = Math.floor((minHeapCount - 2) / 2);
  while (lastLeafChild >= 0) {
    shiftDown(lastLeafChild);
    lastLeafChild--;
  }
}

/**
 * @description: 删除堆顶
 * @param {*}
 * @return {*}
 */
function shift() {
  let mid = minHeap[0];
  minHeapCount--;
  minHeap[0] = minHeap.pop();
  shiftDown(0);
  return mid;
}

/**
 * 优先队列入队操作
 * @param {obj} Object {key, time}
 */
export function insert(obj: any) {
  minHeap[minHeapCount] = obj;
  shiftUp(minHeapCount);
  minHeapCount++;
  createTimer();
}

/**
 * 最小堆的shiftUp操作
 * @param {index} Number 索引
 */
function shiftUp(index: any) {
  while (index > 0) {
    let parent = Math.floor((index - 1) / 2);
    if (minHeap[parent].time > minHeap[index].time) {
      swap(parent, index, minHeap);
      index = parent;
    } else {
      break;
    }
  }
}

/**
 * @param {index} 索引
 */
function shiftDown(index: any) {
  while (2 * index + 1 < minHeapCount) {
    let child = 2 * index + 1;
    if (minHeap[child + 1] && minHeap[child].time > minHeap[child + 1].time) {
      child += 1;
    }
    if (minHeap[index].time > minHeap[child].time) {
      swap(index, child, minHeap);
      index = child;
    } else {
      break;
    }
  }
}

/**
 *
 * @param {i} Number 索引
 * @param {j} Number 索引
 * @param {arr} Array 数组
 */
function swap(i: number, j: number, arr: any) {
  let mid = arr[j];
  arr[i] = arr[j];
  arr[j] = arr[i];
}

/**
 * @description: 清除优先队列和定时器
 * @param {*}
 * @return {*}
 */
export function clearHeap() {
  clearTimeout(timer);
  minHeap = [];
  minHeapCount = 0;
}

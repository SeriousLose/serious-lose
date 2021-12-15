import { createMinHeapByLocalInfo, insert } from "./minHeap";

export const recordName = 'STORAGE_RECORD'; // 存储key

/**
 * @description: 返回存的对象  获取localStorage中存储的localInfo对象并转换为javascript对象
 * @param {*}
 * @return {*} Object  localInfo
 */
export function getLocalInfo(): any {
  let localInfo: any = localStorage.getItem(recordName);
  if (!localInfo) {
    localInfo = {};
  } else {
    localInfo = JSON.parse(localInfo);
  }
  return localInfo;
}

/**
 * @description: 将需要定时存储的时间信息存储到localInfo中, 并且localInfo改变后更新优先队列
 * @param {string} key 键
 * @param {number} time 时间 毫秒数
 * @return {*}
 */
export function addLocalInfo(key: string, time: number): void {
  let overdueTime = new Date().getTime() + time; // 到期的时间
  let localInfo = getLocalInfo();
  if (localInfo[key] === undefined) {
    localInfo[key] = overdueTime;
    localStorage.setItem(recordName, JSON.stringify(localInfo));
    insert({key,time,});
  } else {
    localInfo[key] = overdueTime;
    localStorage.setItem(recordName, JSON.stringify(localInfo));
    createMinHeapByLocalInfo(localInfo);
  }
}

/**
 * @description: 删除 存储对象的key
 * @param {string} key
 * @return {*}
 */
export function deleteLocalInfo(key: string): any {
  let localInfo = getLocalInfo();
  if (localInfo[key] !== undefined) {
    delete localInfo[key];
    localStorage.setItem(recordName, JSON.stringify(localInfo));
    createMinHeapByLocalInfo(localInfo)
  }
}

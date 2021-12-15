import { clearHeap } from "./minHeap";
import { addLocalInfo, deleteLocalInfo } from "./storage-info";

/**
 * @description: 获取 localStorage
 * @param {string} key
 * @return {*}
 */
export function get(key: string): string|null {
  return localStorage.getItem(key);
}

/**
 * @description: 保存 localStorage
 * @param {string} key 键
 * @param {string} value 值
 * @param {number} time 存储时间，毫秒数 如果不传则认为永久存储  time不允许为0
 * @return {*}
 */
export function save(key: string, value: string, time: number): void {
  if (time === 0) {
    throw new Error('在存储的时候time不允许设为0');
  }
  if (time) {
    addLocalInfo(key, time);
  }
  localStorage.setItem(key, value);
}

/**
 * @description: 删除storage中的某一项
 * @param {string} key 键
 * @return {*}
 */
export function remove(key: string): void {
  deleteLocalInfo(key);
  localStorage.removeItem(key);
}

/**
 * @description: 清空 localStorage
 * @param {*}
 * @return {*}
 */
export function clear(): void {
  clearHeap();
  localStorage.clear();
}

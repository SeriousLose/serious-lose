/**
 * @description: 获取 sessionStorage
 * @param {string} key
 * @return {string}
 */
function get(key: string): string | null{
  return sessionStorage.getItem(key);
}

/**
 * @description: 保存 sessionStorage
 * @param {string} key
 * @param {string} value
 * @return {*}
 */
function save(key: string, value: string): void {
  sessionStorage.setItem(key, value);
}

/**
 * @description: 删除 sessionStorage
 * @param {string} key
 * @return {*}
 */
function remove(key: string): void {
  sessionStorage.removeItem(key);
}

/**
 * @description: 清空sessionStorage
 * @return {*}
 */
function clear(): void {
  sessionStorage.clear();
}

export default {
  get,
  save,
  remove,
  clear,
};

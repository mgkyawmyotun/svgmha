import * as fs from 'fs';
import { dirname } from 'path';
export function getSourceFromFile(path: string) {
  return getDataFromFile(path);
}

function getDataFromFile(path: string) {
  return fs.readFileSync(path).toString();
}
export function writeDataToFile(path: string, data: string) {
  return fs.writeFileSync(path, data);
}
export function isString(value: any) {
  const type = typeof value;
  return (
    type === 'string' ||
    (type === 'object' &&
      value != null &&
      !Array.isArray(value) &&
      getTag(value) == '[object String]')
  );
}
function getTag(value: any) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return toString.call(value);
}
export function isPlainObject(value: any) {
  if (
    !(typeof value === 'object' && value !== null) ||
    getTag(value) != '[object Object]'
  ) {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}

export function addPropsToElement(element: string, type: 'class' | 'function') {
  return element.replace(
    /^<svg/,
    type === 'function' ? `<svg {...props}` : `<svg {...this.props}`
  );
}

export function getDir(path: string) {
  // console.log()
  return dirname(path);
}
export function createDirIfNotExist(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

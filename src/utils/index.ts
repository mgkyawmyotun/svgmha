import { readFileSync } from 'fs';
export function getSourceFromFile(path: string) {
  return getDataFromFile(path);
}

function getDataFromFile(path: string) {
  return readFileSync(path).toString();
}

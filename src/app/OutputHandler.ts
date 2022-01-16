import { createDirIfNotExist, getDir, writeDataToFile } from '../utils';
import { CommandManager } from './CommandManager';
import { BaseHandler } from './Handler';

export class OutputHandler extends BaseHandler {
  constructor() {
    super(null);
  }
  handle(source: any) {
    let { output, file, extension } = CommandManager.getOptions();
    if (!output) {
      output = file.replace('.svg', '.' + extension);
    }
    try {
      const dir = getDir(output);
      createDirIfNotExist(dir);
      writeDataToFile(output, source);
    } catch (error) {
      console.log(error);
    }
    return;
  }
}
